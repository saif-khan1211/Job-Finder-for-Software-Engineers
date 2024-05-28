const noteService = require('../services/noteService');

exports.addNote = async (req,res) =>{
    try{
        const note = noteService.addNote(req.user.id, res.body);
        res.status(201).json(note)
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
};

exports.getNotes = async (req,res) =>{
    try{
        const note = noteService.getNotes(req.user.id, res.body);
        res.status(201).json(note)
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
};

