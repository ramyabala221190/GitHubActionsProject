import express from 'express';

const app=express();

app.get('/hello',(req,res,next)=>{
    res.send(`Express application running on port 3000`);
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})