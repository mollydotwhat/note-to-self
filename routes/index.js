const express = require('express');

//import router(s)
const notesRouter = require('./notes')
//and this is what makes me think I've set up the routes wrong

const app = express();
app.use('/api/notes', notesRouter);
// this works if it's the one where i can just specify the URL, and tell it where to look for the routes. Probably the first thing I should check if I get a GET error.


module.exports = app;