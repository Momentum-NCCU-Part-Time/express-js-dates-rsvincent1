const express = require("express");
const app = express();
const config = { port: process.env.PORT || 3000 };
const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
var calendar = require("dayjs/plugin/calendar");
dayjs.extend(calendar);

var isoWeek = require("dayjs/plugin/isoWeek");
dayjs.extend(isoWeek);

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

app.get("/api/dates/today", (req, res) => {
  res.status(200).send({ date: dayjs().format("dddd MMM DD, YYYY") });
});

app.get("/api/dates/tomorrow", (req, res) => {
  const today = dayjs();
  const tomorrow = today.add(1, "day");
  res.status(200).json({ date: tomorrow.format("dddd MMM DD, YYYY") });
});

app.get("/api/dates/yesterday", (req, res) => {
  const today = dayjs();
  const tomorrow = today.subtract(1, "day");
  res.status(200).json({ date: tomorrow.format("dddd MMM DD, YYYY") });
});

app.get("/api/day-of-week/:year/:month/:day", (req, res) => {
  const year = req.params.year;
  const month = req.params.month;
  const day = req.params.day;
  const dayOfWeek = dayjs(year, day, month);

  res.status(200).json({ date: dayOfWeek.format("dddd") });
});

app.get("/api/current-time", (req, res) => {
  const format = req.query.format;
  res.status(200).json({ date: dayjs(format).format("hh mm s A") });
});

app.get("/api/timestamp", (req, res) => {
  const timestamp = dayjs().valueOf();
  const format = req.query.format;
  res.status(200).json({ date: dayjs(timestamp).format("SSS") });
});

app.use((req, res, next) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
