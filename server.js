if (process.env.NODE_ENV !== "production") {
    //if we are in development
    require("dotenv").config(); //load all the environment variables and set them
}

const express = require("express"); //setup and pull express library
const app = express(); //get the app to run the function
const bcrypt = require("bcrypt"); //setup and pull bcrypt library
const passport = require("passport"); //setup and pull passport library
const flash = require("express-flash"); //setup and pull express flash library
const session = require("express-session"); //setup and pull express session library

//call function from passport-config
const initializePassport = require("./passport-config");
initializePassport(
    passport,
    email => users.find(user => user.email === email) //find user based on email
);

app.set("view-engine", "ejs");

//take the form and abble to get variables on form
app.use(express.urlencoded({ extended: false}));


app.use(flash());
app.use(session({
    //encrypt all the info getting from environment variables
    secret: process.env.SESSION_SECRET,
    resave: false, //should we resave our session variables
    saveUninitialized: false // do you wann save empty value if there's no value
}))
app.use(passport.initialize());
app.use(passport.session());

//create users to store the information. Should store this in a database
const users = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/", //if success redirect to above
    failureRedirect: "/login", //if sucess redirect to login 
    failureFlash: true
}));

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

//create hashed password. async is used because the functions are not syncronized and needs to await ofr the return
app.post("/register", async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(), //if has database it's not needed
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect("/login"); // if succeeds redirect to login page
    } catch {
        res.redirect("/register"); //if error redirects to register page
    }
});

app.get("/recover", (req,res) => {
    res.render("recover.ejs");
});

app.post("/recover", (req,res) => {

});

//run the app on port 3000
app.listen(3000);