import moment from "moment";

import { Canvas } from "./calendar/Canvas";

const birthday = moment([1996, 7, 27]);
const today = moment();

const lifespan = 90;
const age = 26;

export const daysNumber = moment.duration(lifespan, "years").asDays();
export const daysGone = moment.duration(age, "years").asDays();
export const daysLeft = moment.duration(lifespan - age, "years").asDays();

console.log("DAYS LEFT: ", moment.duration(lifespan - age, "years").asDays());
console.log("WEEKS LEFT: ", moment.duration(lifespan - age, "years").asWeeks());
console.log(
  "MONTH LEFT: ",
  moment.duration(lifespan - age, "years").asMonths()
);

const canvasItem = new Canvas({ width: 1440, height: 800 });

const chartSection = document.getElementById("chart-section");
canvasItem.render(chartSection);
