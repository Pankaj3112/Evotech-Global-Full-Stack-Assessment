const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
	},
	nationality: {
		type: String,
	},
	email: {
		type: String,
	},
	phoneNumber: {
		type: Number,
	},
	address: {
		type: String,
	},
	message: {
		type: String,
		required: true
	},
},
{timestamps: true});

const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;
