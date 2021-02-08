// LOAD DATA
//const app = require("express");
const noteData = require("../db/notes");

// ROUTING

module.exports = function (app) {
    // API GET Request
    
    app.get("/api/notes", function (req, res) {
        noteData.getNoteData()
        .then((notes) => res.json(notes))
        .catch((err) => res.json(err));
    });

    // API POST Request
  
    app.post("/api/notes", function (req, res) {
        noteData.saveNoteData(req.body)
        .then((notes) => res.json(notes))
        .catch((err) => res.json(err));

        // noteData.saveNoteData(req.params.data)
        // .then(noteData => res.json(noteData));
    });

    // API DELETE Request

    app.delete("/api/notes/:id", function (req,res) {
        noteData.removeNoteData(req.params.id)
        .then(() => res.json({ok: true}))
        .catch((err) => res.json(err));
    })

};
