import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AdoptionRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: requestPet = [], refetch } = useQuery({
    queryKey: ["requestPet"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/adoption/${user?.email}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  // delete adoption request
  const handleDeleteItem = (pet) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to delete this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/adoption/${pet._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${pet?.requesterName}'s request has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  // handleMakeAdopted
  const handleMakeAdopted = (pet) => {
    console.log(pet);
    axiosSecure.patch(`/reqAdoption/reqAdopted/${pet._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your requested has been accepted.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl text-center mb-10">
        Adoption Request {requestPet.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-black">#</th>
              <th className="text-black">Requester Name</th>
              <th className="text-black">Requester Email</th>
              <th className="text-black">Requester Phone</th>
              <th className="text-black">Requester Location</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {requestPet.map((pet, index) => (
              <tr key={index}>
                <th>{1}</th>
                <td>{pet.requesterName}</td>
                <td>{pet.requesterEmail}</td>
                <td>{pet.phone}</td>
                <td>
                  <p>{pet.requesterAddress}</p>
                </td>
                <td>
                  {pet.adoptionStatus ? (
                    "Not available"
                  ) : (
                    <button
                      onClick={() => handleMakeAdopted(pet)}
                      className="btn bg-green-500"
                    >
                      Adopted
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(pet)}
                    className="btn btn-bs bg-[#d84e4e]"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdoptionRequest;
