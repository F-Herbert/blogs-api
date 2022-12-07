const jwt = require('jsonwebtoken');
const { User } = require('../models');

 const secret = process.env.JWT_SECRET || 'YourSecretHere';

const jwtConfig = { algorithm: 'HS256', expiresIn: '10d' };

const getByUsername = async ({ email, password }) => {
    const validUser = await User.findOne({ where: { email, password } });
    const token = jwt.sign({ data: validUser.dataValues }, secret, jwtConfig);
    if (validUser === null) return { status: 400, message: 'Invalid fields', err: true };
    console.log(token);
    return { status: 200, message: token, err: false };
};

module.exports = {
  getByUsername,
};