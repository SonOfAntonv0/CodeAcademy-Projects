const express= require('express');
const app= express();

const PORT=3000;

app.get('/',(req,res,next)=>{
    console.log('Hello, world')
});

app.listen(PORT,()=>{
    console.log(`Listening ${PORT}`);
});