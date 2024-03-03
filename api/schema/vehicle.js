const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaOptions = {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
const VehicleSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: String,
  number: {
    type: String,
    required: true,
  },
  reference_id: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  capacity_unit: {
    type: String,
    required: true,
  },
}, schemaOptions);

VehicleSchema.index({ reference_id: 1 });

module.exports = VehicleSchema;
