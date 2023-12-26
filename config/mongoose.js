const mongoose = require('mongoose');
require('dotenv').config();


console.log(process.env.MONGODB_CONNECTION_STRING);
const mongoURI = process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/Evotech'; //change in production

//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/Evotech')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
