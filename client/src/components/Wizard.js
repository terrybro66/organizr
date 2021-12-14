import { React, useEffect } from "react";
import axios from "axios";

const Wizard = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/apps/Wizard");

      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      Wizard<h1></h1>
    </div>
  );
};

export default Wizard;
