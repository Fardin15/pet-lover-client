import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyAddedPets = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myPets = [], refetch } = useQuery({
    queryKey: ["myPets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-pets/${user?.email}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  // delete pet
  const handleDeleteItem = (pet) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/pet/${pet._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${pet?.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-10">My Added Pets</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl font-medium text-black">#</th>
              <th className="text-xl font-medium text-black">Pet Name</th>
              <th className="text-xl font-medium text-black">Category</th>
              <th className="text-xl font-medium text-black">Image</th>
              <th className="text-xl font-medium text-black">Status</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myPets.map((pet, index) => (
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
                  {pet.adoptionStatus === false ? "Not Adopted" : "Adopted"}
                </td>
                <td>
                  <Link to={`/dashboard/update/${pet._id}`}>
                    <button className="btn bg-blue-500">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(pet)}
                    className="btn btn-bs bg-[#d84e4e]"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn bg-green-500">Adopted</button>
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

export default MyAddedPets;
