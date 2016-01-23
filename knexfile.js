// Update with your config settings.

require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemon'
  },

  production: {
    client: 'pg',
    connection: process.env.ADATABASE_URL
  },

  seeds: {
  directory: './seeds'
}

};
