import Banner from "../Banner/Banner";
import Achievements from "./Achievements";
import EventClass from "./EventClass";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div data-aos="fade-up-left">
        <Services></Services>
      </div>

      <EventClass></EventClass>
      <Achievements></Achievements>
      <Footer></Footer>
    </div>
  );
};

export default Home;
