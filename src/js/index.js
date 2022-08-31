import moment from "moment";
import { Day } from "./calendar/Day";

const lifespan = 90;
const age = 26;

export const daysNumber = moment.duration(lifespan, "years").asDays();
export const daysGone = moment.duration(age, "years").asDays();
export const daysLeft = moment.duration(lifespan - age, "years").asDays();

const canvas = document.getElementById("calendar");
const ctx = canvas.getContext("2d");

const daySize = 10;
const day = new Day({ size: daySize, offset: 4, ctx, color: "green" });

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 300; j++) {
    day.move(daySize * i, daySize * j);
    day.draw();
  }
}
