import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        photo: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {});
      Swal.fire({
        icon: "success",
        text: "logged in successfully !!",
      });
      navigate("/");
    });
  };
  return (
    <div className="flex justify-center items-center gap-12 mt-5 pb-3">
      <button
        onClick={handleGoogleSignIn}
        className="btn font-semibold text-2xl"
      >
        <FaGoogle></FaGoogle>
      </button>
      <button className="btn font-semibold text-2xl">
        <FaFacebook></FaFacebook>
      </button>
      <button className="btn font-semibold text-2xl">
        <FaGithub></FaGithub>
      </button>
    </div>
  );
};

export default SocialLogin;
