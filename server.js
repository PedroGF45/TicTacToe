//setup and pull express library
const express = require("express"); 

//get the app to run the function
const app = express();

//setup and pull bcrypt library
const bcrypt = require("bcrypt");

//app accepts and use json
app.use(express.json())


//create users to store the information. Should store this in a database
const users = [];

app.get("/users", (req, res) => {
    res.json(users)
});

app.post("/users", async (req, res) => {
    try {
        //generates a random hashed salt
        const salt = await bcrypt.genSalt();
        
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        console.log(salt);
        console.log(hashedPassword);

        //requests name and password
        const user = {
            name: req.body.name,
            password: hashedPassword
        }

         //pushes the user to the array of users
        users.push(user);

        //sends a response
        res.status(201).send();
    } catch {
        res.status(500).send(); //in case something wrong
    }
})

//run the app on port 3000
app.listen(3000);