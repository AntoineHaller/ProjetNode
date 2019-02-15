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