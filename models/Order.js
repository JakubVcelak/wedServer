const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product: {type: String, require:true},
    firstName: {type: String, require:true},
    secondName:{type: String, require:true}
});

module.exports = mongoose.model('Order', orderSchema);