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
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
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
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

  //okay, maybe i DO need individual id get, even though it won't use its own page. Crashed nodemon, though.
  notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        return result.length > 0
          ? res.json(result)
          : res.json('No note with that ID');
      });
  });
  

  // i think the delete route would be the only one that's write, because you don't want to overwrite the db.json each time. Adding this last.

  module.exports = notes;