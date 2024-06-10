import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_key = "54fbb8339a2c997485f26254a446380d";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const CreateCampaign = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    // post image to get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const createCampaignData = {
        ownerName: user?.displayName,
        ownerEmail: user?.email,
        petName: data.name,
        maxAmount: data.maxAmount,
        highAmount: data.highAmount,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        deadline: data.deadline,
        image: res.data.data.display_url,
      };
      console.log(createCampaignData);
      // post campaign in database
      const campaignRes = await axiosSecure.post(
        "/campaign",
        createCampaignData
      );
      if (campaignRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Campaign created for ${data.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/myCampaign");
      }
    }
  };
  return (
    <div>
      <h1 className="text-3xl">Create Donation Campaign</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Pet name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pet Name*</span>
              </div>
              <input
                type="text"
                placeholder="Pet Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
            {/* Maximum Amount */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Maximum Amount*</span>
              </div>
              <input
                type="number"
                placeholder="Maximum Amount"
                {...register("maxAmount", { required: true })}
                className="input input-bordered w-full"
                required
              />
            </label>
            {/* Highest Amount */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Highest Amount*</span>
              </div>
              <input
                type="number"
                placeholder="Highest Amount"
                {...register("highAmount", { required: true })}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Short description */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Short description*</span>
              </div>
              <input
                type="text"
                placeholder="Short description"
                {...register("shortDescription", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Deadline*</span>
              </div>
              <input
                type="date"
                placeholder="Deadline"
                {...register("deadline", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Long description */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Long description*</span>
            </div>
            <textarea
              {...register("longDescription", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Long description"
            ></textarea>
          </label>
          {/* pets image */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Pets Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn text-white bg-[#835D23]">Add Pet</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
