const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const puppeteer = require("puppeteer");

const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected ....");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
const taskSchema = new mongoose.Schema({
  type: "string",
  title: "string",
  text: "string",
  list: [String],
});
const Task = mongoose.model("Task", taskSchema);

app.get("/", (req, res) => {
  Task.find().then((tasks) => res.json(tasks));
});

app.post("/create-event", function (req, res) {
  console.log(req.body);
  const newType = req.body.type;
  const newTitle = req.body.title;
  const newText = req.body.text;
  const newList = req.body.list;

  const newEvent = new Task({
    type: newType,
    title: newTitle,
    text: newText,
    list: newList,
  });
  console.log(newEvent);
  newEvent.save();
});

const host = "localhost";
app.listen(port, host, () => {
  console.log(`Server running on port ${port}`);
});
