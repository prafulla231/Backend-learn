require('dotenv').config()
const express = require('express')
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send("Hello world");
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${port}`);
})

// console.log("Chai and Backend");