const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_CONNECTION_STRING;

//connect to database
mongoose.connect(mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
