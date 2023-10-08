import Navbar from "../../pages/Home/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Merchandise = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div data-aos="fade-up">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/K6zYKD9/Presentation.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>

          <div className="container max-w-sm mx-auto mt-52">
            <div className="card w-96 glass text-white">
              <figure>
                <img
                  src="https://i.ibb.co/K6zYKD9/Presentation.png"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New Jersey</h2>
                <p>This Jersey is only for the members to purchase </p>
                <div className="card-actions justify-center items-center">
                  <p>Price:</p>
                  <button className="btn btn-primary">$399</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
