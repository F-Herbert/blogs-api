const categoriesService = require('../services/categories.service');

const addNewCategory = async (req, res) => {
  try {
    const infoCategory = req.body;

    const { status, message, error } = await categoriesService
      .addNewCategory(infoCategory);

    if (error) return res.status(status).json({ message: error });
    return res.status(status).json(message);
  } catch (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoriesService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  addNewCategory,
  getAllCategories,
};