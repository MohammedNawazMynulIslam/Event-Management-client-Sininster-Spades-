const ServiceDetail = ({ card }) => {
  const { name, image, description } = card;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>

            <button className="btn btn-primary">Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
