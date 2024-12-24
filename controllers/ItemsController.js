const Grocery = require("../db/models/groccery");

const addGrocery = async (req, res) => {
  try {
    const { name, price, inventory } = req.body;
    const grocery = await Grocery.create({ name, price, inventory });
    res.status(201).json(grocery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllGroceries = async (req, res) => {
  try {
    const groceries = await Grocery.findAll();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGroceryById = async (req, res) => {
  try {
    const { id } = req.params;

    const grocery = await Grocery.findByPk(id);
    if (!grocery) {
      return res.status(404).json({ message: "Grocery item not found" });
    }

    await grocery.destroy();
    res.status(200).json({ message: "Grocery item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateGrocery = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, inventory } = req.body;
    const grocery = await Grocery.findByPk(id);
    if (!grocery) return res.status(404).json({ message: "Grocery not found" });

    await grocery.update({ name, price, inventory });
    res.json(grocery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addGrocery,
  getAllGroceries,
  deleteGroceryById,
  updateGrocery,
};
