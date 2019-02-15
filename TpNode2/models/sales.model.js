const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalesSchema = new Schema (
    {
        numero: String,
        ttc: String
    }
);

module.exports = mongoose.model('Sales', SalesSchema);