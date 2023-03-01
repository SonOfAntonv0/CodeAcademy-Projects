const express= require('express');

const minionsRouter= express.Router();

const db = require('./db.js');

const workRouter=require('./work.js');

minionsRouter.use('/work',workRouter);

module.exports=minionsRouter;

minionsRouter.get('/',(req,res,next)=>{
    const arr= db.getAllFromDatabase('minions');
    res.status(200).send(arr);
});

minionsRouter.post('/',(req,res,next)=>{
    const newMinion= db.addToDatabase("minion",req.body);
    res.status(200).send(newMinion);
});

minionsRouter.get('/:minionId',(req,res,next)=>{
    const elem= db.getFromDatabaseById('minions',req.params.minionId);
    if(elem){
        res.send(elem)
    }
    else{
        res.status(404).send();
    }
});

minionsRouter.put('/:minionId',(req,res,next)=>{
    const elem= db.getFromDatabaseById('minions',req.params.id);
    if(elem){
        db.updateInstanceInDatabase('minions',req.body)
        res.send(elem);
    }
    else{
        res.status(404).send();
    }

});

minionsRouter.delete('/:minionId',(req,res,next)=>{
    const elem= db.deleteFromDatabasebyId('minion',req.params.id);
    if(elem)
        res.status(204).send();
    else    
        res.status(403).send();
});

