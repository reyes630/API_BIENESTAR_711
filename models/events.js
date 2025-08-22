'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.belongsTo(models.category, { 
        foreignKey: 'categoryId', 
        as: 'category' });
      event.belongsTo(models.user, { 
        foreignKey: 'userId', 
        as: 'user' });

    }
  }
  events.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    state: DataTypes.ENUM('Activo', 'Inactivo'),
    maxCapaciy: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};