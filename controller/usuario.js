const {response} = require ('express');
const { Router } = require('express');
const bcrypt = require ('bcrypt');
const Usuario = require ('../models/usuario');
const {generarJWT} = require('../helpers/jwt');
const { default: mongoose } = require('mongoose');

const router = Router();


const parseId = (id) =>{
    return  mongoose.Types.ObjectId(id)
}
//Routes created user routes
const userVote = {};


userVote.getUsers = async (req, res) => {
    const desde = Number(req.query.desde) || 0;
     const [usuarios, total] = await Promise.all([
        Usuario
            .find({},'nombre email  voto')
            .skip( desde ? 1 : 0)
            .limit(5),
        Usuario.countDocuments()
     ]);
      res.json({
          ok:true,
          usuarios,
          total
      });
 }
 userVote.getUsersById = async (req, res) => {
    const _id  = req.params.id;
    const uid = req.uid;
    const desde = Number(req.query.desde) || 0;
     const [usuarios, total] = await Promise.all([
        Usuario
            .findById({_id},'nombre email')
            .skip( desde ? 1 : 0)
            .limit(5),
        Usuario.countDocuments()
     ]);
      res.json({
          ok:true,
          usuarios,
          total
      });
 }

 userVote.createdUser = async (req, res = response) =>{
          const {email, password} = req.body;
          try{
              const existeEmail = await Usuario.findOne({email: email});
              if (existeEmail){
                  return res.status(400).json({
                      ok:false,
                      message:"The email is already registered, try another"
                    });
              }
              const usuario = new Usuario(req.body);
              //contraseña incriptada
              const salt = bcrypt.genSaltSync();
              usuario.password = bcrypt.hashSync(password, salt);
              // save user 
              await usuario.save();
              // Genered token user
              const token = await generarJWT(usuario.id)

              res.json({                
                  usuario,
                  token
              });
            } catch (err) {
              res.status(500).json({ 
                  ok: true,
                  message: ' internar server error'})
          }
 };

 userVote.updateUser = async (req, res = response) => {
     //Token validation
     const uid = req.params.uid;
     try {
         const usuarioDB = Usuario.findById(uid);
            if (!usuarioDB) {
                res.status(404).json({
                    message: 'user not found'
                })
            }
         // Update
         const { email, vote, ...campos} = req.body;
            if (usuarioDB.email !== email){
               const existeEmail = await Usuario.findOne({email});
               if (existeEmail){
                   return res.status(400).json({
                       message:'There is already a user with that email'
                   });
               }
            }
        const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, { new: true});
          res.json({ message: usuarioActualizado})
     } catch (error) {
        res.status(500).json({
        message:"error al actualizar" });
         
     }
 }

 userVote.deleteUser = async (req, res = response) => {
     const uid = req.params.id;
     try {
         const usuarioDB = await Usuario.findById( uid);
            if (!usuarioDB) {
                res.status(404).json({
                    message: 'User not found by Id'
                })
            }
        await Usuario.findByIdAndDelete(uid)

        res.status(200).json({
            message: 'User deleted'
        })
         
     } catch (error) {
         res.status(500).json({
             message: error.message
         })
         
     }

     
 }


 userVote.demo = async (req, res) => {
    try {
      const dbAircraft = await Usuario.findByIdAndUpdate(
        req.params.id,                     
        { voto: true }, { new: true, runValidators: true } 
      );    
      res.json(dbAircraft);
    } catch (err) {
      console.log(err);
      res.status(500).send(`Server error`);
    }
  }

  userVote.publicar = async (req, res) => {
    try {
      const dbAircraft = await Usuario.findByIdAndUpdate(
        req.params.id,                     
        { publicado: true }, { new: true, runValidators: true } 
      );    
      res.json(dbAircraft);
    } catch (err) {
      console.log(err);
          res.status(500).send(`Server error`);
        }
  }
 module.exports = userVote
