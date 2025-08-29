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
      events.belongsTo(models.categories, { 
        foreignKey: 'categoryId', 
        as: 'category' });
      events.belongsTo(models.user, { 
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
    maxCapacity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};