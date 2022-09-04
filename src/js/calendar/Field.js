import { Mark } from "./Mark";

export class Field {
  #marksTotal;
  #marksPerRow;
  #marksFilled;
  #mark;

  constructor({
    markProps: { size, color },
    marks: { total, filled, perRow },
    ctx = null,
  }) {
    this.#mark = new Mark({ ctx, size, color });
    this.#marksTotal = total;
    this.#marksPerRow = perRow;
    this.#marksFilled = filled;
  }

  draw = () => {
    let row = 0;
    let column = 0;
    for (let i = 0; i < this.#marksTotal; i++) {
      if (i % this.#marksPerRow === 0) {
        row++;
        column = 0;
      }

      i <= this.#marksFilled
        ? this.#mark.draw(column, row, true)
        : this.#mark.draw(column, row, false);

      column++;
    }
  };
}
