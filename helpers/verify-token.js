const JWTstrategy = require('passport-jwt').Strategy;
const passport = require('passport')
const ExtractJWT = require('passport-jwt').ExtractJwt;

//Esto verifica que el token enviado por el usuario es válido
passport.use(new JWTstrategy({
  //secreto que solíamos firmar nuestro JWT
  secretOrKey : process.env.JWT_SECRET,
  //esperamos que el usuario envíe el token como un parámetro de consulta con el nombre 'secret_token'
  jwtFromRequest : ExtractJWT.fromUrlQueryParameter(process.env.JWT_SECRET)
}, (token, done) => {
  try {
    return done(null, token);
  } catch (error) {
    done(error);
  }
}))
