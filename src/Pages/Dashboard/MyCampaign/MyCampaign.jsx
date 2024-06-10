import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCampaign = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myCampaigns = [], refetch } = useQuery({
    queryKey: ["myCampaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/campaign/${user?.email}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl text-center mb-10">
        My donation campaign{myCampaigns.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-black">#</th>
              <th className="text-black">Pet Name</th>
              <th className="text-black">Max Amount</th>
              <th className="text-black">Pet Image</th>
              <th className="text-black">Progress Bar</th>
              <th className="text-black">Edit</th>
              <th className="text-black">Pause</th>
              <th className="text-black">Donators</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCampaigns.map((campaign, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{campaign.petName}</td>
                <td>{campaign.maxAmount}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={campaign.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Progress Bar</td>
                <td>
                  <Link to={`/dashboard/updateCampaign/${campaign._id}`}>
                    <button className="btn bg-blue-500">Edit</button>
                  </Link>
                </td>
                <td>
                  <button className="btn bg-blue-500">pause</button>
                </td>
                <td>
                  <button className="btn bg-blue-500">donators</button>
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

export default MyCampaign;
