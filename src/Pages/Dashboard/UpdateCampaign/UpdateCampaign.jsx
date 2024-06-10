import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const UpdateCampaign = () => {
  const {
    name,
    age,
    category,
    shortDescription,
    longDescription,
    location,
    _id,
  } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  return (
    <div>
      <h1>update campaign</h1>
    </div>
  );
};

export default UpdateCampaign;
