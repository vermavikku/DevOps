const express = require("express");
const server = express();


server.use("/",(req,res)=>{
    res.json({Message : "Hello World , Vikas Here vk"})
})


const PORT = 4000;

server.listen(PORT,()=>{
    console.log(`Server Running On : ${PORT}`);
    
})