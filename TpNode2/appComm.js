const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const commentaireController = require('./controllers/commentaire.controller.js');
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

app.get('/commentaire', (req,res) => {
    res.sendFile(__dirname + '/html/commentaire.html');
});

app.post('/commentaire', commentaireController.createCommentaire);

app.get('/commentaire/delete/:name/:format', commentaireController.deleteCommentaire);

app.get('/commentaire/show/:name/:format', commentaireController.showCommentaire);