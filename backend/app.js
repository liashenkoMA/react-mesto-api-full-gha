const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { celebrate, errors, Joi } = require('celebrate');
const rateLimit = require('express-rate-limit');

const router = require('./routes');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const processingErrors = require('./middlewares/processingErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(cors({
  credentials: true,
  origin: 'https://mestomaks.nomoredomainsicu.ru',
}));

const { PORT, DB_URL } = process.env;
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP',
});
const allowedCors = [
  'mestomaks.nomoredomainsicu.ru',
];

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to MongoDB');
});
app.use((req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  next();
});
app.use(limiter);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }).unknown(true),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/^(http|https):\/\/(www\.)?[a-zA-Z0-9\--._~:/?#[\]@!$&'()*+,;=]+#?$/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }).unknown(true),
}), createUser);
app.use(auth, router);
app.use(errorLogger);
app.use(errors());
app.use(processingErrors);

app.listen(PORT, () => {
  console.log(`Connected to ${PORT} port`);
});
