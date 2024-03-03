require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('./model');

const app = express();

// logger
const winston = require('winston');

if (process.env.NODE_ENV === 'development') {
  global.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'route-optimizer-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: './logs/route-optimizer.log' }),
    ],
  });
} else {
  global.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'route-optimizer-service' },
    transports: [
    ],
  }).add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

(async () => {
  await mongoose.connect(process.env.MONGO_URL);
  logger.info('mongodb connection successfull 1');
})();

const server = app.listen(process.env.ROUTE_OPTIMIZER_PORT, () => {
  console.log('App started...');
});
server.on('connection', (socket) => {
  socket.setTimeout(Number(process.env.SOCKET_TIMEOUT));
});
