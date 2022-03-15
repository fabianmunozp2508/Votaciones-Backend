require('dotenv').config();
const passport = require('passport');
const strategy = require('passport-facebook');
const Usuario = require('../models/usuario');
const FacebookStrategy = strategy.Strategy;
 
passport.use(
  new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret:process.env.FACEBOOK_APP_SECRET,
    callbackURL : process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'emails', 'name', 'picture']
  },
    
  async function(accessToken,refreshToken,profile,done)
  {          
    const id = profile.id;
    const nombre = profile.displayName;
    const email = profile.emails[0].value;
    const img = profile.picture[0].value;
    const user = await Usuario.findOne({facebook_id : id});
    if(!user)
    {
        const user = new Usuario({facebook_id : id , nombre, email, img});
        await user.save();
        console.log('Facebook profile data stored in database');
    }
    done(null,profile);
  }
  )
);

module.exports = passport;