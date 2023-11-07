const express = require('express');

//import router(s)
const notesRouter = require('./notes')
//and this is what makes me think I've set up the routes wrong

const app = express();
app.use('/notes', notesRouter); 
// is this what's putting the extra /api in the path? removing to test


module.exports = app;