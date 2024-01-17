const express = require("express");
const app = express();
const config = { port: process.env.PORT || 3000 };
const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();

app.get("/api/dates/today", (req, res) => {
  res.send();
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
