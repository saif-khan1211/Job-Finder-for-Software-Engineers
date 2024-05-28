const skillService = require('../services/skillService');

exports.createSkill = async (req, res) => {
  try {
    const skill = await skillService.createSkill(req.user.id, req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await skillService.getSkills(req.user.id);
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


