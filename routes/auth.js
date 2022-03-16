//login
const { Router } = require('express');
const { login,renewToken,googleSignIn,facebookSing } = require('../controller/auth');
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
router.post( '/google',
    [        
        check('token', 'El token es obligatorio').not().isEmpty(),
        validarCampos
    ],
    googleSignIn
);
router.post( '/facebook',    [        
        check('token', 'El token es obligatorio').not().isEmpty(),
        validarCampos
    ],
    facebookSing
);
router.get( '/renew',
    validarJWT,
    renewToken
);


module.exports = router;
