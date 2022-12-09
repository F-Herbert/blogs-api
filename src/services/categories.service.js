const { Category } = require('../models');

const addNewCategory = async (infoBody) => {
  if (!infoBody) return { status: 400, error: '"name" is required' };

  const newCategory = await Category.create({ name: infoBody.name });
  return { status: 201, message: newCategory };
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  addNewCategory,
  getAllCategories,
};