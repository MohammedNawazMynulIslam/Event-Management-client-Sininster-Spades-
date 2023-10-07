import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Events from "../Events/Events";
import Blog from "../Blog/Blog";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Error from "../Error/Error";
import ServiceDetails from "../Home/ServiceDetails";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
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
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("service.json"),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
