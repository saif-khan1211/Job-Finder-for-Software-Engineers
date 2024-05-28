module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Skill.associate = (models) => {
    Skill.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Skill;
};
