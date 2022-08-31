import moment from "moment";
import { DayMark } from "./calendar/DayMark";

const lifespan = 90;
const age = 26;

export const daysNumber = moment.duration(lifespan, "years").asDays();
export const daysGone = moment.duration(age, "years").asDays();
export const daysLeft = moment.duration(lifespan - age, "years").asDays();

console.log("DAYS: ", moment.duration(lifespan - age, "years").asDays());
console.log("MONTH: ", moment.duration(lifespan - age, "years").asMonths());

const canvas = document.getElementById("calendar");
const ctx = canvas.getContext("2d");

const markSize = 16;
const day = new DayMark({
  ctx,
  size: markSize,
  color: "black",
});

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 600; j++) {
    (i + j) % 2
      ? day.drawFilled(i * markSize, j * markSize)
      : day.drawEmpty(i * markSize, j * markSize);
  }
}
