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

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

//creating a model
const Products = mongoose.model('Products', productSchema);
const Users = mongoose.model('Users', userSchema);

const orderSchema = new mongoose.Schema({
    userId: String,
    username: String,
    email: String,
    productId: String,
    productName: String,
    price: Number,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Orders = mongoose.model('Orders', orderSchema);

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

//creating a user
app.post('/users', (req, res) => {
    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password 
    })
    user.save() //saves values in mongoDB 
    res.send(user)
})

//login user by checking email and password
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await Users.findOne({ email, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.json({
        username: user.username,
        email: user.email,
        id: user._id,
    });
});

//create order
app.post('/orders', async (req, res) => {
    const { userId, username, email, productId, productName, price, image } = req.body;

    if (!userId || !productId || !productName || !price) {
        return res.status(400).json({ message: 'Missing order data' });
    }

    const order = new Orders({
        userId,
        username,
        email,
        productId,
        productName,
        price,
        image,
    });

    await order.save();
    res.json(order);
});

//display orders for a user
app.get('/orders', async (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }

    const orders = await Orders.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
});

//display products from db
app.get('/products', async(req, res)=>{
    const products =  await Products.find();
    res.send(products);
})

//display users from db
app.get('/users', async(req, res)=>{
    const users =  await Users.find();
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})