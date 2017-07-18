const pgPromise = require("pg-promise")
const pgp = pgPromise()
let connectionString = "http_auth"
const db = pgp({
    database: connectionString
})

const queries = {
  addUser: function(name, email, password) {
      return db.one('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING (id)', [name, email, password])
  },
  checkEmail: function(email, password) {
    return db.one('SELECT email, password FROM users WHERE email=$1', [email])
  }
}

module.exports = queries
