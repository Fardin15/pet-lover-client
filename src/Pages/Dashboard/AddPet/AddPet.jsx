import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = "54fbb8339a2c997485f26254a446380d";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPet = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // post date
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${day}/${month}/${year}`;
    // post image to get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const petDetails = {
        name: data.name,
        age: data.age,
        category: data.category,
        location: data.location,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        postDate: date,
        image: res.data.data.display_url,
      };
      // post pet in database
      const petRes = await axiosSecure.post("/pets", petDetails);
      if (petRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added for adoption.`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/addedPets");
      }
    }
  };
  return (
    <div>
      <h1>add a pet</h1>
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
            {/* Pet age */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Age*</span>
              </div>
              <input
                type="text"
                placeholder="Age of your pets"
                {...register("age", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
            {/* pet category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="cat">Cats</option>
                <option value="dog">Dogs</option>
                <option value="rabbit">Rabbit</option>
                <option value="fish">Fish</option>
                <option value="bird">Bird</option>
              </select>
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
            {/* location */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Location*</span>
              </div>
              <input
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
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

export default AddPet;
