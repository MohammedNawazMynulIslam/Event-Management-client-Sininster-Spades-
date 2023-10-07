import Banner from "../Banner/Banner";
import Achievements from "./Achievements";
import EventClass from "./EventClass";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <EventClass></EventClass>
      <Achievements></Achievements>
      <Footer></Footer>
    </div>
  );
};

export default Home;
