const express = require('express');
const app = express();
const port = 3000;

//importing mongoose
const mongoose = require('mongoose');

//importing cors
const cors = require('cors');
//connecting mongoDB
mongoose.connect('mongodb://localhost:27017/mernDB').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
})

app.use(express.json());  
app.use(cors()); // using cors to allow cross-origin requests

//creating a schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

//creating a model
const Products = mongoose.model('Products', productSchema);

//creating a product
app.post('/products', (req, res) => {
    const product = new Products({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price    
    })
    product.save() //saves values in mongoDB 
    res.send(product)
})

//display products from db
app.get('/products', async(req, res)=>{
    const products =  await Products.find();
    res.send(products);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})