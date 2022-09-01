import { Mark } from "./Mark";

export class YearWeeks {
  #weeksTotal = 52;
  #markSize;
  #mark;

  constructor({ markSize, color, ctx = null }) {
    this.#mark = new Mark({ ctx, markSize, color });
    this.#markSize = this.#mark.getSize();
  }

  draw = (year, weeksPassed) => {
    const weeksLeft = this.#weeksTotal - weeksPassed;

    for (let i = 0; i < this.#weeksTotal; i++) {
      i < weeksLeft
        ? this.#mark.drawFilled(i * this.#markSize, year * this.#markSize)
        : this.#mark.drawEmpty(i * this.#markSize, year * this.#markSize);
    }
  };
}
