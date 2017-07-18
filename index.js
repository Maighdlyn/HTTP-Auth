const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const bodyParser = require("body-parser")
const queries = require("./database/queries")


app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.render("main")
})

app.get("/login", function(req, res){
  res.render("login")
})

app.post("/login", function(req, res){
  console.log("req.body", req.body)
})

app.get("/signup", function(req, res){
  // res.render("signup", {status: "fail"})
  res.render("signup")
})

app.post("/signup", function(req, res){
  queries.addUser(req.body.name, req.body.email, req.body.password, req.body.confirmPassword)

})

const port = 3000
app.listen(port, function () {
  console.log("Express server is listening on port", port)
})
