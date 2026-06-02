const mongoose = require ("mongoose");
const connect=async()=>{
   try{
    await mongoose.connect("mongodb+srv://thakarshi248_db_user:GQAc6SQlbS1ViRmq@cluster0.youy9eh.mongodb.net/Model_1");
    console.log("MongoDb Connected.");
   } catch(error){
        console.error("MongoDB Connection Error : ",error);
   }
} 

module.exports = connect;