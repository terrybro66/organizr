import React from "react";

import styles from "./ListingCard.module.css";
import Timer from "./Timer";

const ListingCard = (props) => {
  const x = true;
  const {
    event: { type, title, text, list },
  } = props;
  return (
    <div className={styles[type]}>
      <h1>{title}</h1>
      <p>{text}</p>
      {type != "task" && (
        <div>
          <h1>{type}</h1>
          <p>{list}</p>
          <Timer />
        </div>
      )}
    </div>
  );
};

export default ListingCard;
