const jwt = require('jsonwebtoken');
const { User } = require('../models');

 const secret = process.env.JWT_SECRET || 'YourSecretHere';

const jwtConfig = { algorithm: 'HS256', expiresIn: '10d' };

const login = async ({ email, password }) => {
    const validUser = await User.findOne({ where: { email, password } });
    const token = jwt.sign({ data: validUser.dataValues }, secret, jwtConfig);
    if (validUser === null) return { status: 400, message: 'Invalid fields', err: true };
    console.log(token);
    return { status: 200, message: token, err: false };
};

const createNewUser = async ({ displayName, email, password, image }) => {
  const validNewUser = await User.findOne({ where: { email } });
  if (validNewUser === null) {
    const newUser = User.create({
      displayName,
      email,
      password,
      image,
    });
    const token = jwt.sign({ data: newUser.dataValues }, secret, jwtConfig);
   
    return { status: 201, message: token };
  }
  if (validNewUser.dataValues.email === email) {
    return { status: 409, message: 'User already registered', error: true };
  }
  return null;
};

module.exports = {
  login,
  createNewUser,
};