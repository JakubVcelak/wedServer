const express = require('express')
const cors = require('cors')
const app = express()
const Order = require('./models/Order');
const Gift = require('./models/Gift');
const mongoose = require("mongoose");

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit: '50mb'}))


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

connectDB();




app.post('/addOrder', async (req, res) => {
    if(req.method === 'OPTIONS') { return res.status(200).json(({ body: "OK" })) }
    const order = await Order.create({
        product: req.body.product,
        firstName: req.body.firstName,
        secondName: req.body.secondName
    });

    const result = await Gift.findOne({product: req.body.product}).exec();
    result.booked = true;
    await result.save()

    const gifts = await Gift.find({booked: false}).exec();
    if(gifts){
        res.json(gifts)
        return
    }
    res.send('')
})

app.get('/gifts', async (req, res) => {
    if(req.method === 'OPTIONS') { return res.status(200).json(({ body: "OK" })) }
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

module.exports = app