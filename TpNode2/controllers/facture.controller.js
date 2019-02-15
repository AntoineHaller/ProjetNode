const Facture = require('../models/facture.model.js');

exports.createFacture = function (req,res) {

    //Les différentes constantes
    let totalHT = req.body.nbH * req.body.ctH;
    let boolTVA = req.body.boolTVA;
    let TVA = req.body.tauxTVA;
    let totalTTC;

    if(boolTVA){
        totalTTC = totalHT + (totalHT*TVA/100);
    }
    else{
        totalTTC = totalHT;
    }

    const date = new Date();

    const fs = require('fs');

    //Création du dossier et du fichier RESTE A FAIRE L'INCREMENTATION DU NUMERO DE FACTURE
    fs.mkdir(`invoices/${req.body.nom}`, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        }
    });

    fs.appendFile(`./invoices/${req.body.nom}/F0001.${req.body.format}`, `Facture: F0001, Infos client: ${req.body.nom}, Date: ${date}, Prestation fournie:${req.body.presta}, Nombre d'heures facturées:${req.body.nbH}, Coût horaire:${req.body.ctH}, Coût total HT:${totalHT}, TVA:${req.body.boolTVA}, Taux de TVA:${req.body.tauxTVA}, Total TTC:${totalTTC} ---`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('fichier créé')
        }
    });
    
    //Création de la facture pour la BDD
    let facture = new Facture(
        {
            nfacture: req.body.nfacture,
            total_ttc: totalTTC
        }
    );

    facture.save((err) => {
        if(err){
            console.log(err);
        }
        else {
            console.log('New facture created');
            console.log(facture);
        }
        res.send(facture);
    });

    //Création du log
     fs.mkdir(`log`, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.appendFile('./log/log.log', `Date: ${date} -- Client: ${req.body.nom} **--**`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('log créé')
        }
    });
};

//Fonction 4 le Chiffre d'affaire NON FONCTIONNEL
exports.getCA = function(req, res){
Facture.find({}).exec(function (err, users) {
    let n = Facture.size;
    let CA = 0;
    for (let i = 0; i < n; i++) {
        CA +=CA;
        res.send(CA);
        console.log(CA);
    }
})
}