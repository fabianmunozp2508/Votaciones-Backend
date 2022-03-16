require('dotenv').config();
const path = require('path');
const express = require('express');
const passport = require('./controller/facebook');
const cors = require('cors');
const morgan = require ('morgan');
const compression = require('compression');




//carga de Imagenes 
const multer = require ('multer');
const upload = multer({ dest: path.join(__dirname, './public/assets/uploads/post/temp') })
// connect db
const {dbConnection} = require('./databases/config');
 
// init express
const app = express();

// configuracion de CORS
app.use(cors());

//reed Body 
app.use(express.json());

//conection db
app.use(compression());
dbConnection();
//middlewares
app.use(compression());
//inicializacion de passport
app.use(passport.initialize());


app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Public directory
 app.use( express.static('public'));
 app.use("/uploads", express.static('uploads'));
 

 //Routes
 app.use( '/vph/', require('./routes/authFacebook') ); 
 app.use( '/vph/buscar', require('./routes/busquedas') ); 
 app.use( '/vph/login', require('./routes/auth') );
 app.use( '/vph/usuarios', require('./routes/usuarios') );
 app.use( '/vph/social',upload.single('image'), require('./routes/social') );
 // end connect
 app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});
