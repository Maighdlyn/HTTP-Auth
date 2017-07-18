const express = require('express')
const app = express()
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render("main")
})

app.get('/login', function(req, res){
  res.render("login")
})

app.get('/signup', function(req, res){
  res.render("signup")
})

const port = 3000
app.listen(port, function () {
  console.log("Express server is listening on port", port)
})
