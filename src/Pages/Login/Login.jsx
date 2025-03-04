import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { user, setUser, signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          icon: "success",
          text: "logged in successfully !!",
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: "Please give The right gmail and password",
        });
      });
  };

  useEffect(() => {
    if (user) {
      navigate(location.state ? location.state : "/");
    }
  }, [user]);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* captcha */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Write the captcha here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                className="btn btn-primary"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center font-bold text-xl text-[#D1A054]">
            <small>
              New Here?{" "}
              <Link to="/register" className="text-[#D1A054]">
                Create an Account
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
  );
};

export default Login;
