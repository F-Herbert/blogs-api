const userService = require('../services/user.service');

const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const { status, error, message } = await userService.login(userInfo);
    if (error) return res.status(status).json({ message: error });
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

const getAllUsers = async (_req, res) => {
  const { status, message, error } = await userService.getAllUsers();
  if (error) return res.status(status).json({ message: error });
  return res.status(status).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, error, message } = await userService.getUserById(Number(id));
  if (error) return res.status(status).json({ message: error });
  return res.status(status).json(message);
};

module.exports = {
  login,
  createNewUser,
  getAllUsers,
  getUserById,
};