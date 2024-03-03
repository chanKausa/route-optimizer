const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaOptions = {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const MaterialSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
}, schemaOptions);

module.exports = MaterialSchema;
