const mongoose = require('mongoose');
const connection = async () => {
   try{
    await mongoose.connect("mongodb+srv://madhurima:Am123@cluster0.awxpg.mongodb.net/blogwebapplication?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log(`Database Connected succesfully`)
   }catch(e){
       console.log(`Error while connecting database ${e}`)
   }
}

module.exports = connection;