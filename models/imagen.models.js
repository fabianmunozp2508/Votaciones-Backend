const {Schema, model } = require ('mongoose');
const path = require('path');
const ImagenPostSchema = Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },      
    vote: { type: Number, default: 0 },
    publicado: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now },
    usuario: {
        type:Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Debe de existir una referencia a un usuario']
    },
});
ImagenPostSchema.virtual('uniqueId').get(function () {
    return this.filename.replace(path.extname(this.filename), '');
  });
module.exports = model( 'Image', ImagenPostSchema );