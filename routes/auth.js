//login
const { Router } = require('express');
const { login,renewToken } = require('../controller/auth');
const passport = require('passport');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-JWT');

const router = Router();

router.post( '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
);
router.get( '/renew',
    validarJWT,
    renewToken
);


module.exports = router;
