const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const models = {
  User: require('./user')(sequelize, DataTypes),
  Application: require('./application')(sequelize, DataTypes),
  Skill: require('./skill')(sequelize, DataTypes),
  Question: require('./question')(sequelize, DataTypes),
  Note: require('./note')(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };
