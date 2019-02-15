const Client = require('../models/client.model.js');

exports.createClient = function (req,res) {
    let client = new Client(
        {
            nom: req.body.nom,
            address: req.body.address,
            cp: req.body.cp,
            ville: req.body.ville,
            refnom: req.body.refnom,
            refprenom: req.body.refprenom,
            refposte: req.body.refposte,
            telephone: req.body.telephone,
            mail: req.body.mail,
            prospet: req.body.prospet
        }
    );

    client.save((err) => {
        if(err){
            console.log(err);
        }
        else {
            console.log('New client created');
            console.log(client);
        }
        res.send(client);
    });
};

exports.findById = function(req, res){
    Client.findById(req.params.id, function (err, client) {
        if (err){
            console.log(err);
        }
        console.log(client);
        res.send(client);
    })
};

exports.removeClient = function(req, res){
    Client.findByIdAndRemove(req.params.id, function (err) {
        if (err){
            console.log(err);
        }
        res.send('Deleted client!');
    })
};

exports.updateClient = function(req, res){
    Client.findByIdAndUpdate(req.params.id, req.body ,function (err, client) {
        if (err){
            console.log(err);
        }
        console.log(client);
        res.send('Modified client!');
    })
};


exports.getClient = function(req, res){
    Client.find(function(err, client){
        if(err){
            console.log(err);
        }
        console.log(client);
        res.send(client);
    })
};

exports.removeManyClient = function(req, res){
    Client.deleteMany({nom: req.params.name} , function (err) {
        if (err){
            console.log(err);
        }
        res.send('Deleted clients!');
    })
};

exports.updateManyClient = function(req, res){
    Client.updateMany({nom: req.params.name}, req.body , function (err) {
        if (err){
            console.log(err);
        }
        res.send('Updated clients!');
    })
};