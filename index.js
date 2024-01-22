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
  res.json({ date: tomorrow.format("dddd MMM DD, YYYY") });
});

app.get("/api/dates/yesterday", (req, res) => {
  const today = dayjs();
  const tomorrow = today.subtract(1, "day");
  res.json({ date: tomorrow.format("dddd MMM DD, YYYY") });
});

app.get("/api/day-of-week/:year/:month/:day", (req, res) => {
  //   const dayOfWeek = dayjs();
  res.json(dayjs().isoWeekday(7));
});

app.get("/api/current-time", (req, res) => {
  const time = dayjs.utc();
  time.utc().format();
  res.json(time);
});

app.get("/api/timestamp", (req, res) => {
  res.send();
});

app.use((req, res, next) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
