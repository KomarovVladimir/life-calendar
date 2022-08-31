import moment from "moment";

import { YearWeeks } from "./YearWeeks";

export class Calendar {
  #lifeExpectancy;
  #yearWeeks;

  //TODO: Replace the birthday and the lifeExpectancy with dynamic data
  constructor({ birthday, lifeExpectancy = 90, ctx }) {
    this.#yearWeeks = new YearWeeks({ ctx });
    this.#lifeExpectancy = lifeExpectancy;
  }

  draw = () => {
    for (let year = 0; year < this.#lifeExpectancy; year++) {
      //TODO: Replace "32" with a real number of passed weeks
      this.#yearWeeks.draw(year, 32);
    }
  };
}
