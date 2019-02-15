const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FactureSchema = new Schema (
    {
        nfacture: Number,
        total_ttc: Number
    }
);

module.exports = mongoose.model('Facture', FactureSchema);