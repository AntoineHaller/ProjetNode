exports.createCommentaire = function (req,res) {

    const fs = require('fs');

    fs.mkdir(`notes`, (err) => {
        if (err) {
            console.log(err);
        }
    });

    fs.mkdir(`notes/${req.body.nom}`, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        }
    });

    fs.appendFile(`./notes/${req.body.nom}/notes.${req.body.format}`, `Commentaire 1: ${req.body.commentaire}. Commentaire 2:  ${req.body.commentaire2}`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('fichier créé')
        }
    });
};

exports.deleteCommentaire = function (req,res) {
    const fs = require('fs');
    const path = `notes/${req.params.name}/notes.${req.params.format}`;

    fs.unlink(path, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('fichier supprimé')
        }
    });
};

exports.showCommentaire = function (req,res) {
    const fs = require('fs');
    const path = `../notes/${req.params.name}/notes.${req.params.format}`;
    const contenu = fs.read(path);
    console.log(contenu)
};