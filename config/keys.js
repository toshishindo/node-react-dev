// keys.js - figure out what set of credentials to return
// this variable NODE_ENV is automatically set to 'production' when it runs on Heroku
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}