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
    res.sendFile(__dirname + '/html/createuser.html');
	});

app.post('/', clientController.createClient);

app.get('/api/v1/client', clientController.getClient);

app.get('/api/v1/deleteManyClient/:name', clientController.removeManyClient);

app.get('/api/v1/deleteClient/:id', clientController.removeClient);

app.get('/api/v1/client/:id', clientController.findById);

app.put('/api/v1/updateManyClient/:name', clientController.updateManyClient);

app.put('/api/v1/updateClient/:id', clientController.updateClient);
