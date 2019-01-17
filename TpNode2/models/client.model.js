const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema (
    {
        nom: String,
        address: String,
        cp: Number,
        ville: String,
        telephone: Number,
        mail: String,
        prospet: Boolean
    }
);

module.exports = mongoose.model('Client', ClientSchema);