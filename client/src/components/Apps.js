import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import MyApp from "./MyApp";
import styles from "./Apps.module.css";

const Apps = () => {
  const heroes = [
    {
      id: 0,
      name: "John Smith",
      speciality: "Wizard",
    },
    {
      id: 1,
      name: "Crag Hack",
      speciality: "Viking",
    },
    {
      id: 2,
      name: "Silvio",
      speciality: "Warrior",
    },
  ];
  return (
    <div className={styles.cardContainer}>
      {heroes.map((hero) => (
        <MyApp hero={hero} />
      ))}
    </div>
  );
};

export default Apps;
