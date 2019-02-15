const Sales = require('../models/sales.model.js');

exports.createSales = function (req,res) {
    let sales = new Sales(
        {
            numero: req.body.numero, //TODO ça marche pas! mais c'est un peu normal
            ttc: req.body.ttc
        }
    );

    sales.save((err) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(sales);
        }
        res.send(sales);
    });
};