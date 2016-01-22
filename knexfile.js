// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemon'
  },

  production: {
    client: 'pg',
    connection: process.env.ADATABASE_URL
  }

};
