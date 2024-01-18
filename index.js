const express = require("express");
const app = express();
const config = { port: process.env.PORT || 3000 };
const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
var calendar = require("dayjs/plugin/calendar");
dayjs.extend(calendar);

app.get("/api/dates/today", (req, res) => {
  res.send(dayjs().format("dddd MMM DD, YYYY"));
});

app.get("/api/dates/tomorrow", (req, res) => {
  const today = dayjs();
  const tomorrow = today.add(1, "day");
  res.send(tomorrow.format("dddd MMM DD, YYYY"));
});

app.get("/api/dates/yesterday", (req, res) => {
  const today = dayjs();
  const tomorrow = today.subtract(1, "day");
  res.send(tomorrow.format("dddd MMM DD, YYYY"));
});

app.get("/api/day-of-week/", (req, res) => {
  res.send();
});

app.get("/api/current-time", (req, res) => {
  res.send();
});

app.get("/api/timestamp", (req, res) => {
  res.send();
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
