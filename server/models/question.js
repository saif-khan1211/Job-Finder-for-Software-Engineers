module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Question.associate = (models) => {
    Question.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Question;
};
