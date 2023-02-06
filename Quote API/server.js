const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const apiRouter=require('./api-quotes.js');

app.use('/api/quotes',apiRouter);

app.listen(PORT,()=>{
    console.log(`The server is listening to the {PORT}`);
});
