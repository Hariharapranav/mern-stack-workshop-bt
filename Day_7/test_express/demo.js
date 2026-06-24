const express = require('express');
const app = express();
const port = 3000;

let users = [
    {
        id:1,
        "name": "John Doe",
        "email": "doe@gmail.com"
    }
];

app.get('/user', (req, res)=>{
    res.json(users);
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})