const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.isLoggedIn = (req, res, next) => {
	const token = req.headers.authorization;
	if(!token) return res.status(401).json({success: false, message: 'No token provided'});
	
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.username = decoded.username;
		next();
	} catch (error) {
		res.status(500).json({success: false, message: error.message});
	}
}