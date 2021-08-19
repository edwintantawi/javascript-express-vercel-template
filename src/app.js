const path = require('path');
const express = require('express');
const routes = require('./routes');
const { SERVER_CONFIG } = require('./config');

const app = express();
const { PORT, STATIC_PATH, VIEWS_PATH } = SERVER_CONFIG;

app.set('views', path.join(__dirname, VIEWS_PATH));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, STATIC_PATH)));
routes(app);

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
