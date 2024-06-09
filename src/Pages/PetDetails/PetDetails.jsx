import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PetDetails = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const pet = useLoaderData();
  const {
    _id,
    email,
    name,
    age,
    category,
    location: ownerLocation,
    shortDescription,
    longDescription,
    postDate,
    image,
  } = pet || [];
  console.log(pet);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="max-w-4xl flex flex-col items-center justify-center mb-10">
            <h1 className="text-5xl font-bold text-center mt-3 mb-3">{name}</h1>
            <h1 className="mb-8 text-3xl">
              <span className="font-medium">ID:</span> {_id}
            </h1>
            <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
              <img className="h-[350px] w-[390px]" src={image} alt="" />
              <div>
                <p className="mb-2">
                  <span className="font-medium">Owner:</span> Md Fardin
                </p>

                <p className="mb-2">
                  <span className="font-medium">Post For Adoption:</span>{" "}
                  {postDate}
                </p>

                <p className="mb-2">
                  <span className="font-medium">Location:</span> {ownerLocation}
                </p>

                <p className="mb-2">
                  <span className="font-medium">Age:</span> {age}
                </p>

                <p className="mb-2">
                  <span className="font-medium">About {name}:</span>{" "}
                  {shortDescription}
                  {longDescription}
                </p>
                {/* modal button */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  open modal
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="text-center">{name}</h1>
                      <p className="text-center">Pet ID - {_id}</p>
                      <img
                        className="w-[100px] h-[100px] rounded-full"
                        src={image}
                        alt=""
                      />
                    </div>
                    {/* adoption request form */}
                    <form>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          User Name
                        </label>
                        <input
                          type="text"
                          value={user.displayName}
                          disabled
                          className="input input-bordered w-full mt-1"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          disabled
                          className="input input-bordered w-full mt-1"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Your Phone Number"
                          className="input input-bordered w-full mt-1"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          placeholder="Your Address"
                          className="input input-bordered w-full mt-1"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
