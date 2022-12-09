const { verifyToken } = require('../auth/jwtFunctions');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  const { isError } = verifyToken(authorization);
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  if (isError) return res.status(401).json({ message: 'Expired or invalid token' });
  next();
};

module.exports = {
  tokenValidation,
};