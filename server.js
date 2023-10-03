const express = require('express')
const cors = require('cors')
const app = express()
const Order = require('./models/Order');
const Gift = require('./models/Gift');
const mongoose = require("mongoose");

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit: '50mb'}))

connectDB();

app.post('/addOrder', async (req, res) => {
    const result = await Order.create({
        product: req.body.product,
        firstName: req.body.firstName,
        secondName: req.body.secondName
    });

    if (result) {
        res.sendStatus(200)
        return
    }
})

app.post('/updateGift', async (req, res) => {
    const result = await Gift.findOne({product: req.body.product}).exec();
    result.booked = true;

    if (await result.save()) {
        res.sendStatus(200)
        return
    }
})


app.get('/gifts', async (req, res) => {
    const gifts = await Gift.find({booked: false}).exec();

    if(gifts){
        res.json(gifts)
        return
    }
    res.send('')
})


const PORT = process.env.PORT || 4000;

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://user:useruser@wedding.lti0opi.mongodb.net/?retryWrites=true&w=majority');
    } catch (error) {
        console.error(error);
    }
}

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`App is running on port ${ PORT }`);
    });
});