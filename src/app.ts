import express from 'express';
import { join } from 'path';

const app=express();

app.get('/',(req,res,next)=>{
    res.send(`Express application running on port 3000`);
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})