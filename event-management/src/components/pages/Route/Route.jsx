import AboutUs from "../AboutUs/AboutUs";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Events from "../Events/Events";
import Blog from "../Blog/Blog";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
export default router;
