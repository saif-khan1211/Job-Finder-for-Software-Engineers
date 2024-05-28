const applicationService = require('../services/applicationService');

exports.addApplication = async (req,res) =>{
    try{
        const applications = applicationService.addApplication(req.user.id, res.body);
        res.status(201),json(applications)
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.getApplications = async (req,res) =>{
    try{
        const applicaitons = applicationService.getApplications(req.user.id);
        res.status(201).json(applicaitons);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};