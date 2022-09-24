import moment from "moment";

import { Calendar } from "./Calendar";

export class LifeInWeeksCalendar {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #calendar;
  #weeksInYear = 52;
  #totalMonths = 4680;

  constructor({ markSize = 24, color, birthday } = {}) {
    this.#calendar = new Calendar({
      marks: {
        filled: moment().diff(birthday, "weeks"),
        total: this.#totalMonths,
        perRow: this.#weeksInYear,
      },
      markProps: { size: markSize, color },
      scaleProps: { step: 10 },
      ctx: this.#ctx,
    });
    this.#canvas.width = this.#calendar.getWidth();
    this.#canvas.height = this.#calendar.getHeight();
    this.#canvas.id = "calendar";
  }

  render = (container) => {
    const calendar = document.getElementById("calendar");
    if (calendar) {
      container.removeChild(calendar);
    }
    this.#calendar.draw();
    container.append(this.#canvas);
  };
}
