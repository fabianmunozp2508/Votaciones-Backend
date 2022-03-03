

const { Router } = require('express');
const passport = require('../controller/facebook');

const router = Router();

router.get('/auth/facebook/token', passport.authenticate('facebook-token', { session: false }), (req, res) => {
  return res.json(req.user);
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.send('Esta es una ruta privada y tienes acceso porque estas autenticado como ' + req.user.name);
});

module.exports = router;
