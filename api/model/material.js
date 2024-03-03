const mongoose = require('mongoose');

const { Model } = mongoose;
const { MaterialSchema } = require('../schema');

class Material extends Model {

}

module.exports = mongoose.model(Material, MaterialSchema, 'materials');
