const express = require('express');
const path = require('path');
//should this be here as well as the helper file?? if it works in the routes i don't know what i'd use fs here for.
// const fs = require('fs');
const api = require('./routes/index.js');
// not sure routes folder is correct--maybe just one called api?

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));
//was this what i needed to remember to make the sidebar work??

// GET route (homepage/landing)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET notes (notes *page*)
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);