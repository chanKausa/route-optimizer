const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const envConfig = process.env;

(async () => {
  await mongoose.connect(envConfig.MONGO_URL);
})();

require('./model');
