const { Category } = require('../models');
const { verifyToken } = require('../auth/jwtFunctions');

const addNewCategory = async (infoBody, authorization) => {
  const { isError } = verifyToken(authorization);

  if (!infoBody) return { status: 400, error: '"name" is required' };
  if (!authorization) return { status: 401, error: 'Token not found' };
  if (isError) return { status: 401, error: 'Expired or invalid token' };

  const newCategory = await Category.create({ name: infoBody.name });
  return { status: 201, message: newCategory };
};

module.exports = {
  addNewCategory,
};