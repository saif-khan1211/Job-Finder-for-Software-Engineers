module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Application.associate = (models) => {
      Application.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Application;
  };
  