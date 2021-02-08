// DEPENDENCIES
const util = require("util");
const fs = require("fs");
const uuidv1 = require("uuidv1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note{

    read(){
        return readFileAsync("db/db.json", "utf8");
    }

    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    
    getNoteData() {
        return this.read().then((noteData) => {
            return JSON.parse(noteData);
        })
    
    };
    
    saveNoteData(note) {
        const {title, text} = note;

        const newNotes = {title, text, id:uuidv1()};

        return this.getNoteData()
        .then((note) => [...note,newNotes])
        .then((updatedNote) => this.write(updatedNote))
        .then(() => newNotes);
    };

    removeNoteData(id){
        return this.getNoteData()
        .then((note) => note.filter((n) => n.id != id))
        .then((filterData) => this.write(filterData));
    }
}

module.exports = new Note();


