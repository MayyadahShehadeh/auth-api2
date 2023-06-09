'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const { db } = require('./models/index.js');

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
