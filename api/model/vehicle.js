const mongoose = require('mongoose');

const { Model } = mongoose;
const { VehicleSchema } = require('../schema');

class Vehicle extends Model {

}

module.exports = mongoose.model(Vehicle, VehicleSchema, 'vehicles');
