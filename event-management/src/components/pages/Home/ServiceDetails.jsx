import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

const ServiceDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const selectedCard = useLoaderData();
  useEffect(() => {
    const findCard = selectedCard?.find((Carded) => Carded.id === id);
    setCard(findCard);
  }, [id, selectedCard]);
  return (
    <div>
      <ServiceDetail card={card}></ServiceDetail>
    </div>
  );
};

export default ServiceDetails;
