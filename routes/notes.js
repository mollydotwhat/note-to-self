const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
//actually putting things into the json
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');


  //methods go here
// GET /api/notes (read json)
// POST /api/notes (write to json, return object/new note. uuid needed here.)

  module.exports = notes;