// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const noteData = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Request
    
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    // API POST Request
  
    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
    });

    // API DELETE Request


};
