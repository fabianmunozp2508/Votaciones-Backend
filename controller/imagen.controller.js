const path = require('path');
const fs = require('fs-extra');
const image = {};
const helpers = require('../helpers/libs');
const Image = require('../models/imagen.models');


image.index = async (req, res) => {
    const id = req.params.image_id;
    const uid = req.uid;
    const image = await Image.find()
                             .sort({Timestamp : -1})
                             .populate('usuario', 'nombre  email  facebook img _id');
    res.json({
        image
    })
};

image.indexId = async (req, res) => {
    const id = req.params.image_id;
    const uid = req.uid;
    const image = await Image.find({'usuario': uid })
                             .populate('usuario', 'nombre img')
                             .sort({Timestamp : -1});
    res.json({
        image
    })
};

image.getImagenById = async(req, res = response) => {
  const id = req.params.id; 
  try {
      const image = await Image.findById(id)
                    .populate('usuario','nombre  email  facebook img _id')                          
          res.json({           
            image
      })
  } catch (error) {     
      res.json({
          ok: true,
          msg: 'Hable con el administrador'
      })
  }
}
image.vote = async (req, res) => {
    const id = req.params.image_id;
    const uid = req.uid;
    let viewModel = { image: {}};
    
    const image = await Image.findById(id)
                             .populate('usuario', 'nombre img');
    if (!image){
        return res.status(404).json({
            ok:true,
            message:'no image found'
        });
    }else{
        image.vote = image.vote + 1;
        viewModel.image = image;
        image.save();
    }
    res.json({
        ok: true, 
        message: 'saved vote'})
}

image.like = async (req, res)=>{
    const id = req.params.image_id;
    const uid = req.uid;
    const image = await Image.findById(id)
                             .populate('image','filename');
    if (image){
        image.likes = image.likes + 1;
        await Image.save(image);
        res.json({
            likes:image.likes})
    }else if (!image){
        image.likes = image.likes - 1;
        await Image.save(image);
        res.json({
          likes:image.likes})
    }
    else {
        res.status(500).json ({
            error: 'Internal server error'
        });
    }

}
image.created = async ( req, res)=>{
    const uid = req.uid;  
    const saveImage = async () => {
      const imgUrl =  helpers.randonNumber()
      const images = await Image.find({ filename: imgUrl });
      if (images.length > 0) {
        saveImage();  
      
      }else {
        // Image Location
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(__dirname,`../public/assets/uploads/post/${imgUrl}${ext}`);
  
        // Validate Extension
        if (
          ext === ".png" ||
          ext === ".jpg" ||
          ext === ".jpeg" ||
          ext === ".gif"
        ) {
          
          // you wil need the public/temp path or this will throw an error
          await fs.rename(imageTempPath, targetPath);
  
          // create a new image
          const newImg = new Image({          
            title: req.body.title,
            filename: imgUrl + ext,
            description: req.body.description,
            usuario: uid,
            ...req.body
          });
  
          // save the image
          const imageSaved = await newImg.save();
          res.json({ 
            newImg:imageSaved
           })
  
        } else {
          await fs.unlink(imageTempPath);
          res.status(500).json({ error: "Only Images are allowed" });
        }
      }
    };
  
    saveImage();
  };
  image.delete = async ( req, res)=>{  
    const id  = req.params.image_id;
    const uid = req.uid;
    const image = await Image.findById( id );
    if (image) {
      await fs.unlink(path.resolve(__dirname, `../public/assets/uploads/post/${image.filename}`));      
      await image.remove();    
      res.json({  
        image, 
        id,   
        msg: 'Eliminado con exito '
      })
    } else {
      res.json({
        image,
        id,
        msg: 'Error al eliminar '
      })  
    } 
  };
  
  image.actualizarImage = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {        
        const image = await Image.findById( id );
        if ( !image ) {
            return res.status(404).json({
                ok: true,
                msg: 'No se encontro Imagen',
            });
        }
        const cambiosImnage = {
            ...req.body,
            usuario: uid
        }
        const imagenActualizada = await Image.findByIdAndUpdate( id, cambiosImage, { new: true } );
        res.json({
            ok: true,
            image: imagenActualizada        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

 
}

image.publicar = async (req, res) => {
  try {
    const dbAircraft = await Image.findByIdAndUpdate(
      req.params.id,                     
      { publicado: true }, { new: true, runValidators: true } 
    );    
    res.json(dbAircraft);
  } catch (err) {
    console.log(err);
        res.status(500).send(`Server error`);
      }
}
module.exports = image;