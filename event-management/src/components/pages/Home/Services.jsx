const Services = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-20 font-semibold text-2xl text-purple-500">
        E - SPORT GAMING SERVICES
      </h2>
      <h1 className="text-center font-extrabold text-5xl text-white mt-6 mb-16">
        The Services We Provide
      </h1>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://i.ibb.co/n8W8NMF/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tournament Hosting</h2>
            <p>
              Organize and host competitive gaming tournaments with professional
              setup and management
            </p>
            <div className="card-actions justify-center items-center mt-5">
              <p>price: $ 500</p>
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://i.ibb.co/g79K8cw/ella-don-f-K5-Oomnc-Wk-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LAN Party Setup</h2>
            <p>
              Set up a local area network for a large-scale gaming event,
              including equipment and technical support.
            </p>

            <div className="card-actions justify-center items-center mt-5">
              <p>price: $ 800</p>
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://i.ibb.co/wNFGbpZ/jesus-loves-austin-0-O0gux4-OZX4-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Live Streaming Service</h2>
            <p>
              Provide high-quality live streaming services for gaming events,
              ensuring a seamless viewing experience.
            </p>
            <div className="card-actions justify-center items-center mt-5">
              <p>price: $ 500</p>
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://i.ibb.co/vVdqfQg/F487ca-DWYAEldqw.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Prize Pool Management</h2>
            <p>
              Handle the distribution of prizes, cash, and merchandise for
              tournament winners and participants.
            </p>
            <div className="card-actions justify-center items-center mt-5">
              <p>price: $ 200</p>
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://i.ibb.co/4W3161R/stem-list-ry-RU-cd1yas-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Custom Event Branding</h2>
            <p>
              Design and implement custom branding for your gaming event,
              including logos, banners, and marketing materials
            </p>

            <div className="card-actions justify-center items-center">
              <p>price: $ 300</p>
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://i.ibb.co/SXBcdCj/mimi-thian-ZKBzlifgkgw-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Tournament HostingTechnical Support Team
            </h2>
            <p>
              Provide on-site technical support and troubleshooting for gaming
              setups and equipment during the event
            </p>
            <div className="card-actions justify-center items-center mt-5">
              <p>price: $ 600</p>
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
