const express = require('express') //import express
const app = express() //create an express app
const port = 3000 //set the port


const details = [
    {
        "name": "Ramu",
        "age": 21,
        "dept": "ECE"
    }
]

//get request for details array
app.get('/details', (req, res)=>{
    res.json(details)
})

// get request --> one kind of api
app.get('/', (req, res)=>{
    res.send('Hello from get request')
})


//listen in port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})