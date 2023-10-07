import { useLoaderData } from "react-router-dom";
import Service from "./Service";
const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-20 font-semibold text-2xl text-purple-500">
        E - SPORT GAMING SERVICES
      </h2>
      <h1 className="text-center font-extrabold text-5xl text-white mt-6 mb-16">
        The Services We Provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
