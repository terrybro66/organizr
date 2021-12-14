import React from "react";
import { useParams } from "react-router-dom";
import components from "./components";

const Detail = () => {
  const { id } = useParams();
  const PageComponent = components.find((comp) => comp.id === id).component;
  return (
    <div>
      <PageComponent />
    </div>
  );
};

export default Detail;
