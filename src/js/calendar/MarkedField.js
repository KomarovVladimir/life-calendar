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

  draw = (x = 0, y = 0) => {
    let row = 0;
    let column = 0;

    console.log(x, y);

    this.#mark.setCtxTranslate(x, y);

    for (let i = 0; i < this.#marksTotal; i++) {
      if (i % this.#marksPerRow === 0) {
        row++;
        column = 0;
      }

      this.#mark.draw(column, row, i <= this.#marksFilled);

      column++;
    }
  };
}
