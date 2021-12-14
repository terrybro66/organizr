import React, { useState } from "react";
import foods from "../utils/foods";

const EventForm = ({
  title,
  setTitle,
  event,
  setText,
  text,
  type,
  list,
  setList,
}) => {
  const [checkedState, setCheckedState] = useState(
    new Array(foods.length).fill(false)
  );

  return (
    <form>
      <input
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        value={title}
      ></input>
      {type === "task" && (
        <input
          onChange={(e) => setText(e.target.value)}
          name="text"
          value={text}
        ></input>
      )}
      {type === "exercise" && (
        <input
          onChange={(e) => setText(e.target.value)}
          name="text"
          value={text}
        ></input>
      )}
      {type === "food" &&
        foods.map((item) => {
          return (
            <label key={item.id}>
              <input
                onChange={(e) => {
                  // add to list
                  if (e.target.checked) {
                    setList([...list, item.name]);
                  } else {
                    // remove from list
                    setList(list.filter((food) => food !== item.name));
                  }
                }}
                type="checkbox"
                selected={list.includes(item.name)}
              ></input>
              <span>{item.name}</span>
            </label>
          );
        })}

      <button onClick={event}>ADD EVENT</button>
    </form>
  );
};

export default EventForm;
