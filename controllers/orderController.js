const { Order, OrderItems, Grocery } = require("../models");

const placeOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const order = await Order.create({ user_id: req.user.id });

    for (const item of items) {
      const grocery = await Grocery.findByPk(item.grocery_id);
      if (!grocery || grocery.inventory < item.quantity) {
        return res
          .status(400)
          .json({ message: "Invalid or insufficient inventory" });
      }
      await grocery.update({ inventory: grocery.inventory - item.quantity });
      await OrderItems.create({
        order_id: order.id,
        grocery_id: item.grocery_id,
        quantity: item.quantity,
      });
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = placeOrder;
