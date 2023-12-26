const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 8000;
const db = require('./config/mongoose');


// Middleware for parsing request bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Server is up and running');
});

app.use('/survey', require('./routes/survey'));
app.use('/admin', require('./routes/admin'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
}); 