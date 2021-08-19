const { SERVER_CONFIG } = require('../config');

const routes = (app) => {
  const { API_ROUTE } = SERVER_CONFIG;

  app.use('/', require('./mainRoutes'));
  // API
  app.use(`${API_ROUTE}/users`, require('./userRoute'));
  app.use(`${API_ROUTE}/admins`, require('./adminRoutes'));
};

module.exports = routes;
