const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const image  = require('../controller/imagen.controller');

const router = Router();

router.get( '/',[validarJWT,validarCampos], image.index );
router.get( '/imagenes/usuario',[validarJWT,validarCampos],image.indexId );
router.get( '/imagenes/usuario/:id', validarJWT ,image.getImagenById );
router.post( '/imagenes/usuario/voto/:image_id',[validarJWT,validarCampos],image.vote);
router.post( '/imagenes/',[validarJWT,validarCampos],image.created );
router.post( '/imagenes/like/:image_id',[validarJWT,validarCampos], image.like );
router.put( '/imagenes/usuario/:id',[validarJWT,validarCampos], image.actualizarImage);
router.patch('/imagenes/usuario/publicar/:id',image.publicar);
router.delete( '/imagenes/:image_id',[validarJWT,validarCampos],image.delete );

module.exports = router;