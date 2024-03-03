const mongoose = require('mongoose');

const { Model } = mongoose;
const { LocationSchema } = require('../schema');

class Location extends Model {

}

module.exports = mongoose.model(Location, LocationSchema, 'locations');
