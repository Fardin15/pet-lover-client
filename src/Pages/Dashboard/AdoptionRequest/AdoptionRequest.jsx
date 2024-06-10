import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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
                  <button className="btn bg-blue-500">Accept</button>
                </td>
                <td>
                  <button className="btn btn-bs bg-[#d84e4e]">Reject</button>
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
