const {Question} = require('../models/question');

const createQuestion = async (question) =>{
    try{
        const question = Question.create(question);
        return question;
    }
    catch(error){
        throw new Error('Could not add question');
    }
};

const getQuestions = async () =>{
    try{
        const questions = Question.findAll();
        return questions;
    }
    catch(error){
        throw new Error('Could not get all questions');
    }
}


module.exports = {createQuestion, getQuestions};