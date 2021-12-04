const express = require("express"); //setup and pull express library
const app = express(); //get the app to run the function

//setup and pull bcrypt library
const bcrypt = require("bcrypt");

//app accepts and use json
app.use(express.json())


//create users to store the information. Should store this in a database
const users = [];

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.get("/recover", (req,res) => {
    res.render("recover.ejs");
})

//run the app on port 3000
app.listen(3000);