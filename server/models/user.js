module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Application, { foreignKey: 'userId' });
    User.hasMany(models.Skill, { foreignKey: 'userId' });
    User.hasMany(models.Question, { foreignKey: 'userId' });
    User.hasMany(models.Note, { foreignKey: 'userId' });
  };

  return User;
};
