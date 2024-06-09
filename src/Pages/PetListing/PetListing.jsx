import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PetListing = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: availablePets = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["availablePets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pets", {
        withCredentials: true,
      });
      return res.data;
    },
  });

  if (isPending) {
    <span className="loading loading-infinity loading-lg text-center"></span>;
  }

  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-9">
        {/* search bar */}
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </div>
        {/* dropdown */}
        <div>
          <select
            defaultValue="default"
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
        </div>
      </div>
      {/* pets */}
      <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-8">
        {availablePets.map((pet, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={pet.image}
                alt="Shoes"
                className="rounded-xl w-[280px] h-[180px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex justify-between items-center gap-4">
                <h2 className="card-title">{pet.name}</h2>
                <p>Age: {pet.age}</p>
              </div>
              <p>Location: {pet.location}</p>
              <div className="card-actions">
                <Link to={`/details/${pet._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
