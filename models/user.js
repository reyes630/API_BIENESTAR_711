'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.event, { foreignKey: 'userId', as: 'events' });
      user.belongsTo(models.Role, { foreignKey: 'rolId' });
    }
  }
  user.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    document: DataTypes.STRING,
    gender: DataTypes.STRING,
    state: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};