const { Router } = require('express');
const passport = require('../controller/facebook');

const router = Router();
router.get('/login/facebook', passport.authenticate('facebook' , { scope : ['email'] } ) ); 
router.get("/login/facebook/callback",passport.authenticate("facebook", {
  successRedirect: "/dashboard/aboutme",
  failureRedirect: "/login",
  session : false 
  })
);

module.exports = router;
