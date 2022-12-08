const userService = require('../services/user.service');

const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const { status, message } = await userService.login(userInfo);
    return res.status(status).json({ token: message });
  } catch (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

const createNewUser = async (req, res) => {
    const userInfo = req.body;
    const { status, message, error } = await userService.createNewUser(userInfo);
    if (error === true) return res.status(status).json({ message });
    return res.status(status).json({ token: message });
};

const getAllUsers = async (req, res) => {
  const { authorization } = req.headers;
  const { status, message, error } = await userService.getAllUsers(authorization);
  if (error) return res.status(status).json({ message: error });
  return res.status(status).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { status, error, message } = await userService.getUserById(Number(id), authorization);
  if (error) return res.status(status).json({ message: error });
  return res.status(status).json(message);
};

module.exports = {
  login,
  createNewUser,
  getAllUsers,
  getUserById,
};