import moment from "moment";
import { Mark } from "./calendar/Mark";
import { Canvas } from "./calendar/Canvas";

const lifespan = 90;
const age = 26;

export const daysNumber = moment.duration(lifespan, "years").asDays();
export const daysGone = moment.duration(age, "years").asDays();
export const daysLeft = moment.duration(lifespan - age, "years").asDays();

console.log("DAYS: ", moment.duration(lifespan - age, "years").asDays());
console.log("WEEKS: ", moment.duration(lifespan - age, "years").asWeeks());
console.log("MONTH: ", moment.duration(lifespan - age, "years").asMonths());

// const canvas = document.getElementById("calendar");
// const ctx = canvas.getContext("2d");

const canvasItem = new Canvas({ width: 600, height: 400 });

console.log(canvasItem);

const chartSection = document.getElementById("chart-section");
canvasItem.render(chartSection);

// const markSize = 16;
// const day = new Mark({
//   ctx,
//   size: markSize,
//   color: "black",
// });

// for (let i = 0; i < 60; i++) {
//   for (let j = 0; j < 70; j++) {
//     (i + j) % 2
//       ? day.drawFilled(i * markSize, j * markSize)
//       : day.drawEmpty(i * markSize, j * markSize);
//   }
// }
