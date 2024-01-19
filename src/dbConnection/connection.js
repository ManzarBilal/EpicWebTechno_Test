const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/nestedData",{
      
}).then(()=>{
    console.log("Connection successful");
}).catch((error)=>{
    console.log("No Connection",error);
});
