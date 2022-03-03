const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    voto: {type: Boolean, default: false},
    publicado: {type: Boolean, default: false},
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    facebookProvider: {
        type: {
              id: String,
              email: String,
              displayName: String,
              token: String
        },
        select: false
  }   
});


UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model( 'Usuario', UsuarioSchema );