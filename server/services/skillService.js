const {Skill} = require('../models/skill');

const createSkill = async (skill) =>{
    try{
        const skill = Skill.create(skill);
        return skill;
    }
    catch(error){
        throw new Error('Unable to add skill');
    }
};

const getSkills = async () =>{
    try{
        const skills = await Skill.findAll();
        return skills;
    }
    catch(error){
        throw new Error('Could not get all skills');
    }

};

module.exports = {createSkill,getSkills};