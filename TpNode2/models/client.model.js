const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema (
    {
        nom: String,
        address: String,
        cp: Number,
        ville: String,
        referent: new ReferentContact(
		{
			nom: req.body.refnom,
			prenom: req.body.refprenom,
			poste: req.body.refposte
		},
        telephone: Number,
        mail: String,
        prospet: Boolean
    }
);

module.exports = mongoose.model('Client', ClientSchema);
