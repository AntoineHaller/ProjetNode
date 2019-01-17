const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clientController = require('./controllers/client.controller.js');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json());

const dbConfig = require('./config/db.config.js');

mongoose.connect(dbConfig.url, {useNewUrlParser: true} ,(err) => {
    if (err){
        console.log('ERROR: data base NOT connected');
    }
    else {
        console.log('data base connected')
    }
});

app.listen(dbConfig.port, () => {
    console.log(`Server on on port ${dbConfig.port}`);
});

app.get('/', (req,res) => {
    res.send('SLT!');
});

app.post('/api/v1/product/create', clientController.createClient);