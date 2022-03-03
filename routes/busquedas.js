const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const buscar = require('../controller/busquedas');


const router = Router();

router.get('/:busqueda', validarJWT , buscar.getTodo );

router.get('/coleccion/:tabla/:busqueda', validarJWT , buscar.getDocumentosColeccion );



module.exports = router;