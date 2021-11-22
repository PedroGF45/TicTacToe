//setup and pull express library
const express = require("express"); 

//get the app to run the function
const app = express();

//create users to store the information. Should store this in a database
const users = [];


app.get("/users", (req, res) => {
    res.json(users)
});

//run the app on port 3000
app.listen(3000);