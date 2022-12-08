const { createToken, verifyToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const login = async ({ email, password }) => {
    const validUser = await User.findOne({ where: { email, password } });
    if (validUser === null) return { status: 400, error: 'Invalid fields' };
    const { password: _, ...validUserWithoutPassword } = validUser.dataValues;
    const token = createToken(validUserWithoutPassword);
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
    const { password: _, ...userWithoutPassword } = newUser;
    const token = createToken(userWithoutPassword);
    return { status: 201, message: token };
  }
  if (validNewUser.dataValues.email === email) {
    return { status: 409, message: 'User already registered', error: true };
  }
  return null;
};

  const getAllUsers = async (authorization) => {
    const allUser = await User.findAll();
    const formatUsers = allUser.map(({ dataValues }) => {
      const { password: _, ...userWithoutPassword } = dataValues;
      return userWithoutPassword;
    });

    const { isError } = verifyToken(authorization);
    if (!authorization) return { status: 401, error: 'Token not found' };
    if (isError) return { status: 401, error: 'Expired or invalid token' };

    return { status: 200, message: formatUsers };
  };

  const getUserById = async (id, authorization) => {
    const user = await User.findOne({ where: { id } });
    if (user === null) return { status: 404, error: 'User does not exist' };

    const { dataValues } = user;
    const { password: _, ...userWithoutPassword } = dataValues;
    const { isError } = verifyToken(authorization);

    if (!authorization) return { status: 401, error: 'Token not found' };
    if (isError) return { status: 401, error: 'Expired or invalid token' };

    return { status: 200, message: userWithoutPassword };
  };

module.exports = {
  login,
  createNewUser,
  getAllUsers,
  getUserById,
};