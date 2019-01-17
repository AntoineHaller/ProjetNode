const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReferentSchema = new Schema (
    {
        nom: String,
        prenom: String,
        poste: String
    }
);

module.exports = mongoose.model('Referent', ReferentSchema);