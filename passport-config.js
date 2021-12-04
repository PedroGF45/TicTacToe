const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt"); //to check if password is correct

function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, {message: "no user found"}); //if there's no user return null
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                //password is correct
                return done(null, user)
            } else {
                //password is incorrect
                return done(null, false, { message: "incorrect password"});
            }
        } catch (e) {
            return done(e); //if happens any error show it
        }
    }

    passport.use(new LocalStrategy({ usernameField: "email" }), authenticateUser)
    passport.serializeUser((user, done) => {});
    passport.deserializeUser((user, done) => {});
}

module.exports = initialize;