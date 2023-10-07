import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, image, price, description, id } = service;
  return (
    <div>
      <div className="card  glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center item-center mt-5">
            <p>price: ${price}</p>
            <Link to={`/service/${id}`}>
              <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
