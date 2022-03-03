const mongoose = require('mongoose');
//conections for db
 const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('successful connection');
    }catch(error){
        console.log('Error connecting to the database, please contact the administrator')
    }
 }
 module.exports = {
     dbConnection
 }