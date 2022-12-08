const categoriesService = require('../services/categories.service');

const addNewCategory = async (req, res) => {
  try {
    const infoCategory = req.body;

    const { authorization } = req.headers;
    const { status, message, error } = await categoriesService
      .addNewCategory(infoCategory, authorization);

    if (error) return res.status(status).json({ message: error });
    return res.status(status).json(message);
  } catch (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

module.exports = {
  addNewCategory,
};