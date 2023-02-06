const express= require('express');
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const apiRouter= express.Router();
module.exports=apiRouter;

apiRouter.get('/random',(req,res,next)=>{
    const responseObj={};
    const randomQuote=getRandomElement(quotes);
    responseObj.quote=randomQuote;
    res.status(200).send(responseObj);
});

apiRouter.get('/',(req,res,next)=>{
    const responseObj={};
    console.log(`Object keys length=${JSON.stringify(req.query.person)}`);
 if(Object.keys(req.query).length==0){
    console.log(quotes);
     responseObj.quote=quotes;
     res.status(200).send(responseObj);
 }
 else{
     const filteredQuotes=quotes.filter(elem=>{elem.person===JSON.stringify(req.query.person)});
     responseObj.quote=filteredQuotes;
     res.status(200).send(responseObj);
 }
});

apiRouter.post('/',(req,res,next)=>{
    const responseObj={};
    if(req.query.hasOwnProperty('person')&&req.query.hasOwnProperty('quote')){
        quotes.push(req.query);
        responseObj.quote=req.query;
        res.status(201).send(responseObj);
    }
    else
        res.status(400).send();

});