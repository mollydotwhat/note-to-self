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
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });
// POST /api/notes (write to json, return object/new note. uuid needed here.)
notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = notes;