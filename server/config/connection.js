const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODV_URI || 'mongodb://localhost:27017/glassify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;