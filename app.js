const express=require("express");
require("./src/dbConnection/connection");
const nestedDataRouter=require("./src/routers/nestedDataRouter");
const app=express();
const PORT=5000;
app.use(express.json());

app.use(nestedDataRouter);

app.listen(PORT,()=>{
     console.log(`Server is listening on port ${PORT}`);
});