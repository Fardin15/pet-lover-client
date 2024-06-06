import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const image_hosting_key = "54fbb8339a2c997485f26254a446380d";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then(async (result) => {
      console.log(result.user);

      if (result.user) {
        // uploading image
        const imageFile = { image: data.image[0] };
        const res = await axios.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          updateProfile(result.user, {
            displayName: data?.name,
            photoURL: res.data?.data?.display_url,
          })
            .then(() => {
              console.log("User Updated Successfully");
              const userInfo = {
                name: data?.name,
                email: data.email,
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  console.log("user added");
                  Swal.fire({
                    icon: "success",
                    text: "Registered successfully..Now Please Login...!",
                  });
                  reset();
                  logOut();
                  navigate("/");
                }
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* your name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              {/* your email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /[a-zA-Z0-9._%+-]+@gmail\.com/,
                  })}
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500">You should use gmail.com</p>
                )}
              </div>
              {/* image */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 6 characters .
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less than 20 characters .
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password should have at least one lowercase,one
                    uppercase,one digit and one special character characters .
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center font-bold text-xl text-[#D1A054]">
              <small>
                Already registered?{" "}
                <Link to="/register" className="text-[#D1A054]">
                  Go to Login
                </Link>
              </small>
            </p>
            <p className="text-center font-medium text-[#444444] text-xl mt-6">
              or sign in with
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
