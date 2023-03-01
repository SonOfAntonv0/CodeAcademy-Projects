const express = require('express');
const apiRouter = express.Router();
const db= require('./db.js');


module.exports = apiRouter;
//Minions route registration
const minionsRouter= require('./minions.js');
apiRouter.use('/minions',minionsRouter);
// Ideas route registration
const ideasRouter= require('./ideas.js');
apiRouter.use('/ideas',ideasRouter);

//meetings route registration
const meetingsRouter=require('./meetings.js');
apiRouter.use('/meetings',meetingsRouter);