import { FaRegCheckCircle } from "react-icons/fa";
const EventClass = () => {
  return (
    <div className="mt-16 container mx-auto">
      <h2 className="text-xl text-purple-700 font-medium text-center">
        EVENTS CLASS
      </h2>
      <p className="text-5xl font-bold my-10 text-center text-white">
        Lets Join Your Team
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* junior */}
        <div className="border bg-black hover:cursor-pointe">
          <h2 className="text-center font-bold text-3xl p-4 text-purple-950">
            Junior Class
          </h2>
          <ul className="w-1/3 mx-auto mb-5 text-white">
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              0 - 2 Winner Rate
            </li>
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              Open For New Team
            </li>
            <li className="flex gap-2 items-center my-2">
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>{" "}
              Easy Battle
            </li>
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              Certificate
            </li>
          </ul>
          <button className="btn btn-secondary ml-44 mb-5">Show Events</button>
        </div>
        {/* junior */}
        <div className="border bg-black hover:cursor-pointe">
          <h2 className="text-center font-bold text-3xl p-4 text-purple-950">
            Middle Class
          </h2>
          <ul className="w-1/3 mx-auto mb-5 text-white">
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              3 - 6 Winner Rate
            </li>
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              Open For New Team
            </li>
            <li className="flex gap-2 items-center my-2">
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>{" "}
              Easy Battle
            </li>
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              Certificate
            </li>
          </ul>
          <button className="btn btn-secondary ml-44 mb-5">Show Events</button>
        </div>
        {/* junior */}
        <div className="border bg-black hover:cursor-pointe">
          <h2 className="text-center font-bold text-3xl p-4 text-purple-950">
            Expert Class
          </h2>
          <ul className="w-1/3 mx-auto mb-5 text-white">
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              More 10+ Winner Rate
            </li>
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              High Class Team
            </li>
            <li className="flex gap-2 items-center my-2">
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>{" "}
              Super Battle
            </li>
            <li className="flex gap-2 items-center my-2">
              {" "}
              <FaRegCheckCircle className="text-purple-950 text-2xl"></FaRegCheckCircle>
              Certificate
            </li>
          </ul>
          <button className="btn btn-secondary ml-44 mb-5">Show Events</button>
        </div>
      </div>
    </div>
  );
};

export default EventClass;
