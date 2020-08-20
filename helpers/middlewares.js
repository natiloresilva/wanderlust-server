const createError = require('http-errors');

//abstraemos funcionalidades para saber si el usuario estÃ¡ logueado
exports.isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) next();
  else next(createError(401));
};

//abstraemos funcionalidades para saber si el usuario NO estÃ¡ logueado
exports.isNotLoggedIn = () => (req, res, next) => {
  if (!req.session.currentUser) next();
  else next(createError(403));
};

exports.validationLoggin = () => (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password ) next(createError(400));
  else next();
}