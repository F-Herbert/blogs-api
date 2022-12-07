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
  // try {
    const userInfo = req.body;
    const { status, message, error } = await userService.createNewUser(userInfo);
    if (error === true) return res.status(status).json({ message });
    return res.status(status).json({ token: message });
  // } catch (error) {
  //   return res.status(400).json({ message: 'não consegui cadastrar' });
  // }
};

module.exports = {
  login,
  createNewUser,
};