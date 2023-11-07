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

// GET route (homepage/landing)

// GET notes (notes *page*)



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);