import { Mark } from "./Mark";

export class YearWeeks {
  #weeksTotal = 52;
  #markSize;
  #mark;

  constructor({ ctx = null }) {
    this.#mark = new Mark({ ctx, size: 16, color: "green" });
    this.#markSize = this.#mark.getSize();
  }

  draw = (year, weeksPassed) => {
    const weeksLeft = this.#weeksTotal - weeksPassed;

    try {
      for (let i = 0; i < this.#weeksTotal; i++) {
        i < weeksLeft
          ? this.#mark.drawFilled(i * this.#markSize, year * this.#markSize)
          : this.#mark.drawEmpty(i * this.#markSize, year * this.#markSize);
      }
    } catch (error) {
      console.error(error);
    }
  };
}
