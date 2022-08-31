import moment from "moment";
import { DayMark } from "./calendar/DayMark";

const lifespan = 90;
const age = 26;

export const daysNumber = moment.duration(lifespan, "years").asDays();
export const daysGone = moment.duration(age, "years").asDays();
export const daysLeft = moment.duration(lifespan - age, "years").asDays();

const canvas = document.getElementById("calendar");
const ctx = canvas.getContext("2d");

const daySize = 7;
const day = new DayMark({
  ctx,
  size: daySize,
  offset: 4,
  color: "green",
});

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    day.move(daySize * i, daySize * j);
    (i + j) % 2 ? day.drawFilled() : day.drawEmpty();
  }
}
