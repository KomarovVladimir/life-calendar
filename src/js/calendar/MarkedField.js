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
    const markSize = this.#mark.getSize();
    let row = 0;
    let column = 0;

    this.#mark.setTranslate(x, y);

    for (let i = 0; i < this.#marksTotal; i++) {
      if (i > 0 && i % this.#marksPerRow === 0) {
        row++;
        column = 0;
      }

      this.#mark.draw(
        column * markSize,
        row * markSize,
        i <= this.#marksFilled
      );

      column++;
    }
  };
}
