export class MarkedField {
  #marksTotal;
  #marksPerRow;
  #marksFilled;
  #mark;

  constructor({ mark = null, marks: { total, filled, perRow } = {} }) {
    this.#mark = mark;
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
