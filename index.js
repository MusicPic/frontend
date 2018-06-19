'use strict';

require('dotenv').config();
const express = require('express');

const app = express();

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});
app.listen(process.env.PORT, () => {
  console.log('__SERVER_UP___', process.env.PORT);
});
