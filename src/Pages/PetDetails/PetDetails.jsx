import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PetDetails = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const pet = useLoaderData();
  console.log(pet);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{pet.name}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
