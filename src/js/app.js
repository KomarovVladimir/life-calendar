import moment from "moment";

import { LifeInWeeksCalendar } from "./calendar/LifeInWeeksCalendar";

let birthday = null;

const birthdayForm = document.forms["birthdayForm"];
const chartSection = document.getElementById("chart-section");

birthdayForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  birthday = new FormData(birthdayForm).get("birthday");

  if (!birthday) {
    return;
  }

  const lifeInWeeksCalendar = new LifeInWeeksCalendar({
    color: "#0e7c7b",
    birthday: moment(birthday),
  });

  lifeInWeeksCalendar.render(chartSection);
});
