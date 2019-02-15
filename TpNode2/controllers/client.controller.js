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

exports.creationFacture = function () {
    const date = new Date();

    const fs = require('fs');

    fs.mkdir(`invoices/${req.body.nom}`, (err) => {
        if (err) {
            console.log(err);
        }
    });

    fs.appendFile(`./invoices/${req.body.nom}/F0001.${req.body.format}`, `Facture: F0001, Infos client: ${req.body.nom}, Date: ${date}, Prestation fournie:${req.body.presta}, Nombre d'heures facturées:${req.body.nbH}, Coût horaire:${req.body.ctF}, Coût total HT:, TVA:${req.body.boolTVA}, Taux de TVA:${req.body.tauxTVA}, Total TTC:.`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('facture créééeer')
        }
    });

    fs.appendFile('./factures&log/log.log', `Date: ${date} -- Client: ${req.body.nom}`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('log créééeer')
        }
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

exports.removeProduct = function(req, res){
    Client.findByIdAndRemove(req.params.id, function (err) {
        if (err){
            console.log(err);
        }
        res.send('Deleted client!');
    })
};

exports.updateProduct = function(req, res){
    Client.findByIdAndUpdate(req.params.id, req.body ,function (err, client) {
        if (err){
            console.log(err);
        }
        console.log(client);
        res.send('Modified client!');
    })
};


exports.getProduct = function(req, res){
    Client.find(function(err, client){
        if(err){
            console.log(err);
        }
        console.log(client);
        res.send(client);
    })
};

exports.removeManyProduct = function(req, res){
    Client.deleteMany({nom: req.params.name} , function (err) {
        if (err){
            console.log(err);
        }
        res.send('Deleted clients!');
    })
};

exports.updateManyProduct = function(req, res){
    Client.updateMany({nom: req.params.name}, req.body , function (err) {
        if (err){
            console.log(err);
        }
        res.send('Updated clients!');
    })
};

exports.calculateTaxe = function(req, res){
    Client.findOne({_id:req.params.id}, function (err) {
        if (err){
            console.log(err);
        }
        else {
            const taxe = require('../class/Taxe.js');
            const ht = require('../class/HT.js');
            const calculHT = new ht(req.body.cout, req.body.horaire);
            const HT = calculHT.calculateHT();
            const calculTtc = new taxe(HT, req.body.prixTva);
            const TTC = calculTtc.calculateTTC();
            console.log(TTC);
            res.send(`Le prix avec la TVA incluse est de ${TTC}€`);
        }
    });
};