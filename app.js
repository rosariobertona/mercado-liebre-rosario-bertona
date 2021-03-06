const { static } = require("express")
const express = require ("express")
const { get } = require("http")
const app = express ()

const path = require ("path")

app.use (express.static (path.resolve (__dirname , "./public")))

app.listen (3000, ()=> {
    console.log("Servidor corriendo");
})

app.get ("/", (req, res)=> res.sendFile(path.resolve (__dirname , "views", "home.html")))
app.get ("/register", (req, res)=> res.sendFile(path.resolve (__dirname , "views", "register.html")))
app.get ("/login", (req, res)=> res.sendFile(path.resolve (__dirname , "views", "login.html")))