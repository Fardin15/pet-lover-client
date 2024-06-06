import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import Campaigns from "../Pages/Campaigns/Campaigns";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";

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
        path: "/campaigns",
        element: (
          <PrivateRoute>
            <Campaigns></Campaigns>
          </PrivateRoute>
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
]);

export default router;
