import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import Campaigns from "../Pages/Campaigns/Campaigns";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AddPet from "../Pages/Dashboard/AddPet/AddPet";
import MyAddedPets from "../Pages/Dashboard/MyAddedPets/MyAddedPets";
import AdoptionRequest from "../Pages/Dashboard/AdoptionRequest/AdoptionRequest";
import CreateCampaign from "../Pages/Dashboard/CreateCampaign/CreateCampaign";
import MyCampaign from "../Pages/Dashboard/MyCampaign/MyCampaign";
import MyDonations from "../Pages/Dashboard/MyDonations/MyDonations";
import Users from "../Pages/Dashboard/Users/Users";
import AllPet from "../Pages/Dashboard/AllPets/AllPet";
import AllDonation from "../Pages/Dashboard/AllDonations/AllDonation";
import AdminRoute from "./AdminRoute";
import UpdatePet from "../Pages/Dashboard/UpdatePet/UpdatePet";
import PetDetails from "../Pages/PetDetails/PetDetails";
import UpdateCampaign from "../Pages/Dashboard/UpdateCampaign/UpdateCampaign";
import CampaignDetails from "../Pages/Campaigns/CampaignDetails/CampaignDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pet-listing",
        element: (
          <PrivateRoute>
            <PetListing></PetListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PetDetails></PetDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pet-lover-server.vercel.app/pet/${params.id}`),
      },
      {
        path: "/campaigns",
        element: (
          <PrivateRoute>
            <Campaigns></Campaigns>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign-details/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://pet-lover-server.vercel.app/campaign-details/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addPet",
        element: <AddPet></AddPet>,
      },
      {
        path: "addedPets",
        element: <MyAddedPets></MyAddedPets>,
      },
      {
        path: "adoptionRequest",
        element: <AdoptionRequest></AdoptionRequest>,
      },
      {
        path: "createCampaign",
        element: <CreateCampaign></CreateCampaign>,
      },
      {
        path: "myCampaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "myDonations",
        element: <MyDonations></MyDonations>,
      },
      // admin routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "allPets",
        element: (
          <AdminRoute>
            <AllPet></AllPet>
          </AdminRoute>
        ),
      },
      {
        path: "allDonations",
        element: (
          <AdminRoute>
            <AllDonation></AllDonation>
          </AdminRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdatePet></UpdatePet>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pet-lover-server.vercel.app/pet/${params.id}`),
      },
      {
        path: "updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
