const notes = require('express').Router();
//actually putting things into the json
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');