import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const CampaignDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const campaignData = useLoaderData();

  const {
    deadline,
    highAmount,
    image,
    longDescription,
    maxAmount,
    ownerEmail,
    ownerName,
    petName,
    shortDescription,
    _id,
  } = campaignData || {};
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-3xl text-center mb-4">Donation For {petName}</h1>
      <div className="text-center text-2xl">
        <p>Campaign creator details :</p>
        <p>
          Name : <span className="font-semibold">{ownerName}</span>
        </p>
        <p>
          Email : <span className="font-semibold">{ownerEmail}</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-centre items-center gap-10 mt-10">
        <div className="md:w-2/5">
          <img src={image} alt="" />
        </div>
        <div className="md:w-2/5 text-lg space-y-3">
          <p>
            <span className="font-medium">Last Date For Donation :</span>
            {deadline}
          </p>
          <p>
            <span className="font-medium">Highest Amount :</span> ${highAmount}
          </p>
          <p>
            <span className="font-medium">Maximum Amount :</span> ${maxAmount}
          </p>
          <p>
            <span className="font-medium">Description :</span>
            {shortDescription}
          </p>
          <p>{longDescription}</p>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Donate Now
          </button>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form action="">
            <h1 className="text-3xl text-center">Donation</h1>
            {/* donation amount */}
            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Donation Amount</span>
              </div>
              <input
                type="number"
                placeholder="Enter your amount"
                // {...register("amount", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
              </Elements>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CampaignDetails;
