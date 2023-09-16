// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'mestomaks.nomoredomainsicu.ru',
  'localhost:3000',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  next();
};
