'use strict';
module.exports = function(sequelize, DataTypes) {
  var sBurger = sequelize.define('sBurger', {
    burger_name: DataTypes.STRING,
    devoured: {
      DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sBurger;
};