import moment from "moment";

import { LifeInWeeksCalendar } from "./calendar/LifeInWeeksCalendar";

const lifeInWeeksCalendar = new LifeInWeeksCalendar({
  birthday: moment("1996-07-27"),
});

const chartSection = document.getElementById("chart-section");
lifeInWeeksCalendar.render(chartSection);
