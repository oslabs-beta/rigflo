const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// SET UP ENV VARIABLES
if (process.env.NODE_ENV !== 'production') {
  const filePath = path.join(__dirname, `./.env.${process.env.NODE_ENV}`);
  require('dotenv').config({ path: filePath });
}

// SERVER
const server = express();
const PORT = process.env.PORT || 3000;

// REQUEST HANDLING
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.options('*', cors());

// HANDLING CORS
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '[*]');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

server.use(allowCrossDomain);

// ROUTERS
const apiRouter = require('./routes/api');
server.use('/api', apiRouter);

// START DATABASE
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'rigflo',
  })
  .catch((err) => console.log(err));

// GLOBAL ERROR HANDLER
server.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error: Unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };

  console.log('ERROR LOG => ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// STATIC ASSETS FOR PRODUCTION
if (process.env.NODE_ENV === 'production') {
  server.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  server.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}

server.listen(PORT);

// LOGS
console.log('NODE_ENV mode is', process.env.NODE_ENV);
console.log(
  'Remember to check your .env file if you cannot connect to the database',
);
console.log(`Server is listening at http://localhost:${PORT}`);
console.log(`Client is live at http://localhost:8080`);
console.log('MONGODB URI is:', process.env.MONGO_URI);
