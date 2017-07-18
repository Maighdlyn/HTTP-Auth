const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const bodyParser = require("body-parser")
const queries = require("./database/queries")
const cookieParser = require("cookie-parser")
const session = require("express-session")


app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")
app.use(cookieParser())
app.use(session({
  secret: "SShhhh. I\'m secret.",
  cookie: {
    maxAge: 5 * 60 * 1000
  }
}))

app.get("/", function(req, res){
  console.log("req.session:", req.session)
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
  const user = req.body
  if(user.password === user.confirmPassword){
    queries.addUser(user.name, user.email, user.password)
      .then(function(data){
        req.session.userid = data.id
        res.redirect('/')
        console.log(data.id)
        console.log("req.session:", req.session)
      })
  }
})

const port = 3000
app.listen(port, function () {
  console.log("Express server is listening on port", port)
})
