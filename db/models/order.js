"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database.js");
const Order = sequelize.define("Order", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  id: {
    type: Sequelize.UUID,
  },
  user_id: {
    type: Sequelize.UUID,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});

Order.associate = (models) => {
  Order.hasMany(models.OrderItem, { foreignKey: "order_id" });
};

module.exports = Order;
