const express = require('express');

const route = express.Router();

route.use('/api', require('./product'));
route.use('/api', require('./post')); //require på filens namn

module.exports = route;