const questionService = require('../services/questionService');

exports.createQuestion = async (req,res) =>{
    try{
        const question = await questionService.createQuestion(req.user.id, req.body);
        res.status(201).json(question);
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
};


exports.getQuestions = async(req,res) =>{
    try{
        const questions = questionService.getQuestions(req.user.id);
        res.status(201).json(questions);
    }

    catch(error){
        res.status(500).json({error: error.message});
    }
}