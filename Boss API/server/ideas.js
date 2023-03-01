const express = require('express');

const ideasRouter= express.Router();

const db= require('./db.js');

module.exports= ideasRouter;  

ideasRouter.param('/:ideaId',(req,res,next,id)=>{
    const newIdea= db.getFromDatabaseById('ideas',id);
    if(!newIdea){
        req.newIdea= newIdea;
        next();
    }
    else{
        res.status(404).send();
    }
});

ideasRouter.get('/',(req,res,next)=>{
    const arr= db.getAllFromDatabase('ideas');
    res.send(arr);
});
ideasRouter.post('/',(req,res,next)=>{
    const newIdea= db.addToDatabase('ideas',req.body);
    res.status(201).send(newIdea);
});
ideasRouter.get('/:ideaId',(req,res,next)=>{
    res.send(req.newIdea);
});
ideasRouter.put('/:ideaId',(req,res,next)=>{
    const newIdea= db.updateInstanceInDatabase('ideas',req.body);
    res.send(newIdea);
});
ideasRouter.delete('/:ideaId',(req,res,next)=>{
    const deletedIdea=db.deleteFromDatabasebyId('ideas',req.params.ideaId);
    if(deletedIdea)
        res.status(204).send();
    else
        res.status(500).send();
});