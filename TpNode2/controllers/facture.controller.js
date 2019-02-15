const Facture = require('../models/facture.model.js');

exports.createFacture = function (req,res) {


    let totalHT = req.body.nbH * req.body.ctH;
    let boolTVA = req.body.boolTVA;
    let TVA = req.body.tauxTVA;
    if(boolTVA){
        let totalTTC = totalHT + (totalHT*TVA/100);
    }
    else{
        let totalTTC = totalHT;
    }
    
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
        //res.send(facture);
    });
};