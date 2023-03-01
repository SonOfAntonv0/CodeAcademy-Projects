const express = require('express');
const meetingsRouter= express.Router();
module.exports=meetingsRouter;
const db= require('./db.js');
meetingsRouter.get('/',(req,res,next)=>{
    const arr=db.getAllFromDatabase('meetings');
    res.send(arr);
});
meetingsRouter.post('/',(req,res,next)=>{
    const newMeeting= db.createMeeting();
    const elem =db.addToDatabase('meetings',newMeeting);
    if(elem){
        res.send(elem);
    }
    else{
        res.status(403).send();
    }

});
meetingsRouter.delete('/',(req,res,next)=>{
    const arr = db.deleteAllFromDatabase('meetings');
    res.status(204).send(arr);
});