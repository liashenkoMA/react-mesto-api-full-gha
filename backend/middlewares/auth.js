const jwt = require('jsonwebtoken');
require('dotenv').config();
const UnauthorizedErr = require('../errors/UnauthorizedErr');

const { JWT_SECRET = 'hellow-worlds' } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new UnauthorizedErr('Необходима авторизация'));
  }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedErr('Необходима авторизация'));
  }

  req.user = payload;
  return next();
};
