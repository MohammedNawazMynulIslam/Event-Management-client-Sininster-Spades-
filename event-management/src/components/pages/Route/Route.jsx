import Home from "../Home/Home";
import Events from "../Events/Events";

import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Error from "../Error/Error";
import ServiceDetails from "../Home/ServiceDetails";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Merchandise from "../../PrivateRoute/Merchandise/Merchandise";
import Gallery from "../Gallery/Gallery";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./info.json"),
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("service.json"),
      },

      {
        path: "/merchandise",
        element: (
          <PrivateRoute>
            <Merchandise />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
