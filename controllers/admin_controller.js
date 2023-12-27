const jwt = require('jsonwebtoken');
const Survey = require('../models/survey');
const Admin = require('../models/admin');
require('dotenv').config();

module.exports.signUp = async (req, res) => {
	const {username, password} = req.body;
	
	if(!username || !password) return res.status(400).json({success: false, message: 'Send username and password to sign up'});

	try {
		const alreadyExists = await Admin.findOne({username});
		if(alreadyExists) throw new Error('Username already exists');

		const admin = await Admin.create({username, password});
		if(!admin) throw new Error('Something went wrong');
		
		res.status(200).json({success: true, message: 'Signed up successfully'});
	} catch (error) {
		res.status(500).json({success: false, message: error.message});
	}
}

module.exports.logIn = async (req, res) => {	
	const {username, password} = req.body;
	if(!username || !password) return res.status(400).json({success: false, message: 'Send username and password to log in'});

	try {
		const admin = await Admin.findOne({username, password});
		if(!admin) throw new Error('Invalid username or password');
		
		const token = jwt.sign({username}, process.env.JWT_SECRET);
		res.status(200).json({success: true, message: 'Logged in successfully', token});
	} catch (error) {
		res.status(500).json({success: false, message: error.message});
	}
}

module.exports.viewAll = async (req, res) => {
	try {
		const surveys = await Survey.find({});
		if(!surveys) throw new Error('No surveys found');
		res.status(200).json({success: true, surveys});
	} catch (error) {
		res.status(500).json({success: false, message: error.message});
	}
}