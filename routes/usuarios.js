const {Router}  = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const userVote = require('../controller/usuario');
const validar = require('../middlewares/validar-JWT');

const router = Router();

router.get( '/', validar.validarJWT , userVote.getUsers);
router.get( '/:id', validar.validarJWT , userVote.getUsersById);
router.patch( '/voto/:id', userVote.demo);
router.patch( '/voto/publicar/:id', userVote.publicar);


router.post( '/',    [
    check('nombre', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    validarCampos,
], 
userVote.createdUser
);

    

module.exports = router;