const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mernDB").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

//schema
const userSchema = new mongoose.Schema({
  name: String,
    price: Number,
    description: String,
    image: String,
});

//model
const User = mongoose.model("User", userSchema);

app.post("/user", async (req, res) => {
  const { name, price, description, image } = req.body;
  if (!name || !price || !description || !image) {
    return res.status(400).send("Please provide all fields");
  }
  const newUser = new User({ name, price, description, image });
  await newUser.save();
  res.send(newUser);
});


app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(3000, () => {
  console.log("Server is listening");
});
