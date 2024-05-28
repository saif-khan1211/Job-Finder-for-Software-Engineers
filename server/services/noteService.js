const {Note} = require('../models/note');

const addNote = async (note) =>{
    try{
        const note = Note.create(note);
        return note
    }
    catch(error){
        throw new Error('Could not create node');
    }
};

const getNotes = async() =>{
    try{
        const notes = Note.findAll();
        return notes
    }
    catch(error){
        throw new Error;
    }
};

module.exports = {addNote, getNotes};




