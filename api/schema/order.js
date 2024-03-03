const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaOptions = {
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const sourceSchema = {
  reference_id: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
};

const destinationSchema = {
  reference_id: {
    type: String,
    required: true,
  },
  source_reference_id: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
};

const materialSchema = {
  code: {
    type: String,
    required: true,
  },
  quantity: {
    value: Number,
    unit: String,
  },
  weight: {
    value: Number,
    unit: String,
  },
  volume: {
    value: Number,
    unit: String,
  },
};

const OrderSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  order_no: {
    type: String,
    required: true,
  },
  sources: [sourceSchema],
  destinations: [destinationSchema],
  materials: [materialSchema],
  vehicle: {
    number: String,
    capacity: Number,
    capacity_unit: String,
  },
  total_weight: {
    type: Number,
    required: true,
  },
}, schemaOptions);

module.exports = OrderSchema;
