import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import Apps from "./components/Apps";
import Listing from "./components/Listing";
import Detail from "./components/Detail";

const App = () => {
  const [currEvent, setCurrEvent] = useState(0);

  const styleOptions = ["white", "red", "blue", "green"];
  const textOptions = ["All", "Tasks", "Foods", "Exercises"];

  const handleListClick = () => {
    if (window.location.pathname === "/") {
      currEvent === 3 ? setCurrEvent(0) : setCurrEvent(currEvent + 1);
    } else {
      setCurrEvent(0);
    }
  };

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
    <Router>
      <div className="container">
        <nav>
          <Link to="/">
            <button
              onClick={handleListClick}
              style={{ backgroundColor: styleOptions[currEvent] }}
            >
              {textOptions[currEvent]}
            </button>
          </Link>

          <Link to="/create-event">
            <button>Create Event </button>
          </Link>

          <Link to="/apps">
            <button>Apps</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Listing currEvent={currEvent} />} />

          <Route path="/create-event" element={<CreateEvent />}></Route>
          <Route path="/apps" element={<Apps />}></Route>
          <Route path="apps/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
