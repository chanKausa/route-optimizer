const mongoose = require('mongoose');

const { Model } = mongoose;
const { OrderSchema } = require('../schema');

class Order extends Model {

}

module.exports = mongoose.model(Order, OrderSchema, 'orders');
