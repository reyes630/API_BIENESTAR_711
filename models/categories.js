'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    // Una categoría puede tener muchos eventos
    categories.hasMany(models.events, {
    foreignKey: 'categoryId', // campo que pusiste en la tabla events
    as: 'events' // alias para acceder a los eventos desde una categoría
  });
    }
  }
  categories.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};