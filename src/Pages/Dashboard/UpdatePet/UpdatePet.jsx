import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePet = () => {
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
  // post date
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}/${month}/${year}`;
  //   image
  const image_hosting_key = "54fbb8339a2c997485f26254a446380d";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const updatePet = {
        name: data.name,
        age: data.age,
        category: data.category,
        location: data.location,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        postDate: date,
        image: res.data.data.display_url,
      };
      const petRes = await axiosSecure.patch(`/pet/${_id}`, updatePet);
      if (petRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated successfully`,
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
      <h1 className="text-3xl">Update your Pet</h1>
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
                defaultValue={name}
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
                defaultValue={age}
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
                defaultValue={category}
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
                defaultValue={shortDescription}
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
                defaultValue={location}
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
              defaultValue={longDescription}
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
          <button className="btn text-white bg-[#835D23]">Update Pet</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePet;
