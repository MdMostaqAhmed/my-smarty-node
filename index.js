const { request } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello over smarty my part now");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "018298238" },
  { id: 2, name: "Sabnur", email: "sabnur@gmail.com", phone: "018298238" },
  { id: 3, name: "Sobita", email: "Sobita@gmail.com", phone: "018298238" },
  { id: 4, name: "Sundonta", email: "Sundonta@gmail.com", phone: "018298238" },
  { id: 5, name: "Sraboni", email: "Sraboni@gmail.com", phone: "018298238" },
  { id: 6, name: "Sonali", email: "Sonali@gmail.com", phone: "018298238" },
  { id: 7, name: "Sabila", email: "Sabila@gmail.com", phone: "018298238" },
];

app.get("/users", (req, res) => {
  // filter by query parameter / search query
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  // const user = users[id];
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = user.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
