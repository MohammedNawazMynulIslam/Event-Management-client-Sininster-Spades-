import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto mt-44">
      <h2 className="text-xl font-black text-red-600 border-b-4 w-1/4">
        SOMETHING IS WRONG
      </h2>

      <p className="font-extrabold text-8xl text-white my-8">404 Not Found</p>
      <p className="font-extrabold text-3xl text-white my-8">
        Please Go Back To The Correct Page
      </p>
      <Link to="/">
        {" "}
        <button className="btn btn-error text-white">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
