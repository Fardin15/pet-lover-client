import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const axiosSecure = useAxiosSecure();
  const { data: campaigns = [], isPending } = useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get("/campaigns", {
        withCredentials: true,
      });
      return res.data;
    },
  });
  if (isPending) {
    return (
      <span className="loading loading-infinity loading-lg text-center"></span>
    );
  }
  return (
    <div className="text-center mt-10 mb-10">
      <h className="text-3xl text-wrap">Total Campaigns : {campaigns.length}</h>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {campaigns.map((data, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl image-full h-[300px] text-center"
          >
            <figure>
              <img src={data.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p>Donation For:</p>
              <h2 className="card-title text-2xl text-center">
                {data.petName}
              </h2>
              <p className="text-left">Maximum Donation: ${data.maxAmount}</p>
              <p className="text-left">Donated Amount: ${0}</p>
              <div className="card-actions">
                <Link to={`/campaign-details/${data._id}`}>
                  <button className="btn bg-green-400 outline-none border-none">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
