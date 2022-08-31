import moment from "moment";

const lifespan = 75;
const age = 26;

const daysNumber = moment.duration(lifespan, "years").asDays();
const daysGone = moment.duration(age, "years").asDays();
const daysLeft = moment.duration(lifespan - age, "years").asDays();

console.log(daysNumber, daysGone, daysLeft);
