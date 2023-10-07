import Banner from "../Banner/Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
