const userService = require('../services/userService');

exports.createUser = async (req, res) =>{
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
};

exports.loginUser = async(req, res) =>{
    try{
        const token = await userService.loginUser(req.body);
        res.status(200).json({token});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};