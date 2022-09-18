export class Scale {
  #ctx;
  #step;
  #mark;
  #verticalMarkersNumber;
  #horizontalMarkersNumber;
  #textOffset = 8;
  #fontSize;

  constructor({
    step = 5,
    mark = null,
    verticalMarkersNumber = 0,
    horizontalMarkersNumber = 0,
    fontSize = 24,
    ctx = null,
  }) {
    this.#ctx = ctx;

    this.#mark = mark;
    this.#step = step;
    this.#verticalMarkersNumber = verticalMarkersNumber;
    this.#horizontalMarkersNumber = horizontalMarkersNumber;
    this.#fontSize = fontSize;
  }

  #drawNumber = (x, y, number) => {
    this.#ctx.textBaseline = "top";
    this.#ctx.font = `bold ${this.#fontSize}px serif`;
    this.#ctx.fillText(number, x, y);
  };

  //TODO: Consider getting x and y offsets if needed
  getOffset = () => this.#fontSize + this.#textOffset;

  draw = () => {
    for (
      let value = this.#step;
      value < this.#verticalMarkersNumber;
      value += this.#step
    ) {
      const offsetX = (value + 1) * this.#mark.getSize();

      this.#drawNumber(offsetX, 0, value);
    }

    for (
      let value = this.#step;
      value < this.#horizontalMarkersNumber;
      value += this.#step
    ) {
      const offsetY = (value + 1) * this.#mark.getSize();

      this.#drawNumber(0, offsetY, value);
    }
  };
}
