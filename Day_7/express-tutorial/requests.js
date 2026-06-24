const express = require('express');
const app = express();
const port = 3000;

//get request example
app.get('/', (req, res) => {
    res.send('Hello from get request');
})

//post request example
app.post("/", (req, res) => {
  res.send("Hello from post request");
});

//put request example
app.put("/", (req, res) => {
  res.send("Hello from put request");
});

//delete request example
app.delete("/", (req, res) => {
  res.send("Hello from delete request");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})