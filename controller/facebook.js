require('dotenv').config();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const FacebookTokenStrategy = require('passport-facebook-token');
const PassportJWT = require('passport-jwt');
const JWTStrategy = PassportJWT.Strategy;
const ExtractJwt = PassportJWT.ExtractJwt;
const Usuario = require ('../models/usuario');

passport.use(new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
}, (accessToken, refreshToken, profile, cb) => {
    const user = Usuario.find(user => user.facebookId === profile.id);

    if (user) {
        // El usuario existe
        const token = jwt.sign(user, process.env.APP_ID);
        return cb(null, Object.assign({}, user, { token }));
    }

    // El usuario no existe 
    const newUser = {
        facebookId: profile.id,
        name: profile.displayName,
        email: profile.emails.length ? profile.emails[0].value : null,
    };

    Usuario.push(newUser);

    const token = jwt.sign(newUser,process.env.APP_ID);
    return cb(null, Object.assign({}, newUser, { token }));
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.APP_ID
}, (jwtPayload, cb) => {
    const user = Usuario.find(user => user.facebookId === jwtPayload.facebookId);
    return cb(null, user);
}));

module.exports = passport;