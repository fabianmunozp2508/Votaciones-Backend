const { response } = require('express');
const Usuario = require('../models/usuario');
const Image = require('../models/imagen.models');

const buscar={};

buscar.getTodo = async(req, res = response ) => {
    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    const [usuarios,imagenes] = await Promise.all([
                      Usuario.find({ nombre: regex }),
                      Image.find({ nombre: regex }),
        
    ]);
    res.json({       
        usuarios,
        imagenes
    })

}

buscar.getDocumentosColeccion = async(req, res = response ) => {

    const tabla    = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex    = new RegExp( busqueda, 'i' );
    let data = [];   

    switch ( tabla ) {       
        case 'usuarios':
            data = await Usuario.find({ nombre: regex });                               
        break;
        case 'imagenes':
            data = await Image.find({ title: regex })
                                   .populate('usuario', 'nombre ');                            
        break;            
        default:
            return res.status(400).json({
                ok: false,
                msg: 'Esta mal el parametro'
            });
    }
    
    res.json({
        ok: true,
        resultados: data
    })

}

module.exports = buscar;
