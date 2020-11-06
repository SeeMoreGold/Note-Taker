// DEPENDENCIES

const fs = require("fs");


    function getNoteData() {
        let noteArray = fs.readFileSync("db/db.json", "utf8");
        return noteArray;
    
    };
    
    function saveNoteData() {

        giveID();
    
    };
    
    // deleteNoteData(req.params.id) {
    
    // };
    
    function giveID() {
    
    };




exports.getNoteData = getNoteData;
exports.saveNoteData = saveNoteData;
