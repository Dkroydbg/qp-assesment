"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
const OrderItems = sequelize.define("OrderItems", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  id: {
    type: Sequelize.UUID,
  },
  order_id: {
    type: Sequelize.UUID,
  },
  grocery_id: {
    type: Sequelize.UUID,
  },
  quantity: {
    type: Sequelize.INTEGER,
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

OrderItems.associate = (models) => {
  OrderItems.belongsTo(models.Order, { foreignKey: "order_id" });
};

module.exports = OrderItems;
