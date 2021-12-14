import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EventForm from "./EventForm";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  function addEvent(e) {
    console.log(list);
    e.preventDefault();
    const newEvent = {
      type: type,
      title: title,
      text: text,
      list: list,
    };

    axios.post("http://localhost:5000/create-event", newEvent);

    navigate("/");
  }

  return (
    <div>
      <h1>Create Event</h1>
      <select onChange={(e) => setType(e.target.value)}>
        <option selected>Select one</option>
        <option value="task">Task</option>
        <option value="food">Food</option>
        <option value="exercise">Exercise</option>
      </select>

      <EventForm
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        event={addEvent}
        type={type}
        list={list}
        setList={setList}
      />
    </div>
  );
};

export default CreateEvent;
