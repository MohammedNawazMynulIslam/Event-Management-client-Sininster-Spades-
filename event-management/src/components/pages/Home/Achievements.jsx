const Achievements = () => {
  return (
    <div className="mt-28" data-aos="zoom-in-down">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QJS4P7s/stem-list-m-U-C52-Ieoeo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-2xl font-bold text-purple-800">
              RATING & STATISTIC
            </h1>
            <p className="font-extrabold text-6xl text-white">
              Events & Streaming Rate
            </p>
            <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-56 mt-11">
              {/* rating */}
              <div>
                <h2 className="text-purple-950 font-extrabold text-6xl">4.8</h2>
                <p className="text-white text-2xl">Rating Publishing</p>
              </div>
              {/* game battle */}
              <div>
                <h2 className="text-purple-950 font-extrabold text-6xl">50+</h2>
                <p className="text-white text-2xl">Game Battle</p>
              </div>
              {/* Money */}
              <div>
                <h2 className="text-purple-950 font-extrabold text-6xl">10k</h2>
                <p className="text-white text-2xl">Money Reach</p>
              </div>
              {/* Community */}
              <div>
                <h2 className="text-purple-950 font-extrabold text-6xl">2k</h2>
                <p className="text-white text-2xl">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
