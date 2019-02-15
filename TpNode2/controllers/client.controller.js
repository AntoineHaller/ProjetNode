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

    fs.mkdir('factures', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Repository created');
        }
    });

    fs.appendFile('./factures/factureClient.txt', `Facture: F+, Infos client:, Date: ${date}, Prestation fournie:, Nombre d'heures facturées:, Coût horaire:, Coût total HT:, TVA:, Taux de TVA:, Total TTC:.`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('facture créééeer')
        }
    });

    fs.appendFile('./factures&log/log.log', `Date: ${date} -- Client: Nom`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('log créééeer')
        }
    });
};