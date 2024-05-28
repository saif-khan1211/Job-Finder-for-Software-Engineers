const {Application} = require('../models/application');


const addApplication = async (application) =>{
    try{
        const application = Application.create(application);
        return application;
    }
    catch (error){
        throw new Error('Could not create application');
    }
}

const getApplications = async () =>{
    try{
        const applications = Application.findAll();
        return applications
    }

    catch(error){
        throw new Error('Could not get applications');
    }
}

module.exports = {addApplication, getApplications};