import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllPet = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allPets = [], refetch } = useQuery({
    queryKey: ["allPets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pets", {
        withCredentials: true,
      });
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl text-center mb-10">All Pets</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Pet Name</th>
              <th>Category</th>
              <th>Image</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {allPets.map((pet, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{pet.name}</td>
                <td>
                  {pet.category.charAt(0).toUpperCase() + pet.category.slice(1)}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={pet.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
                <td>
                  <button>Adopted</button>
                </td>

                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPet;
