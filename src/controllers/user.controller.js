const userService = require('../services/user.service');

const getByUsername = async (req, res) => {
  try {
    const userInfo = req.body;
    const { status, message } = await userService.getByUsername(userInfo);
    return res.status(status).json({ token: message });
  } catch (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

module.exports = {
  getByUsername,
};