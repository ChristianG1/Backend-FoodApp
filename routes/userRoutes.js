const userControllers = require('../controllers/userControllers');

module.exports = (app) => {

  // GET -> OBTENER DATOS
  // POST -> ALMACENAR DATOS
  // PUT -> ACTUALIZAR DATOS
  // DELETE -> ELIMINAR DATOS

  app.post('/api/users/create', userControllers.register);
  app.post('/api/users/login', userControllers.login);
}