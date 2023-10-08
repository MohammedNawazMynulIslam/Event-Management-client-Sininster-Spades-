import { FaRegCheckCircle } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fCsqH3d/ella-don-5388r-Nnwilk-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-white text-2xl lg:text-6xl font-bold">
              Lets Join Our Esport Gaming Events
            </h1>
            <p className="mb-5 text-white">
              We are providing a esports environment where can you show talents.
              If you have patients this is the place for you to shine and rise
              above all.
            </p>
            <ul className="grid grid-cols-2 mb-3">
              <li className="flex gap-2 items-center my-2 text-white">
                <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
                World Live Streaming
              </li>
              <li className="flex gap-2 items-center my-2 text-white">
                <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
                Big Winner Gift
              </li>
              <li className="flex gap-2 items-center my-2 text-white">
                <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
                Best Streamer of the Month
              </li>
              <li className="flex gap-2 items-center my-2 text-white">
                <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
                VFX Support
              </li>
              <li className="flex gap-2 items-center my-2 text-white">
                <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
                Arranging Events
              </li>
              <li className="flex gap-2 items-center my-2 text-white">
                <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
                Sponsor Support
              </li>
            </ul>
            <button className="btn btn-primary my-7 mr-20">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
