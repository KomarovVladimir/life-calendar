//TODO: Move constants
const scaleTypes = {
  horizontal: "HORIZONTAL",
  vertical: "VERTICAL",
};

export class Scale {
  #ctx;
  #step;
  #mark;
  #verticalMarkersNumber;
  #horizontalMarkersNumber;
  #lineLength = 16;
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

  #drawLine = (offset, type) => {
    this.#ctx.beginPath();

    if (type === scaleTypes.horizontal) {
      this.#ctx.moveTo(0, offset);
      this.#ctx.lineTo(this.#lineLength, offset);
    } else if (type === scaleTypes.vertical) {
      this.#ctx.moveTo(offset, 0);
      this.#ctx.lineTo(offset, this.#lineLength);
    }

    this.#ctx.stroke();
  };

  #drawNumber = (number, x, y, baseline) => {
    this.#ctx.textBaseline = baseline;
    this.#ctx.font = `bold ${this.#fontSize}px serif`;
    this.#ctx.fillText(number, x, y);
  };

  //TODO: Consider getting x and y offsets if needed
  getOffset = () => this.#fontSize + this.#lineLength;

  draw = () => {
    for (let i = 0; i < this.#verticalMarkersNumber; i += this.#step) {
      const offsetX =
        i * this.#mark.getSize() +
        this.#mark.getSize() +
        this.#mark.getOffset();

      this.#drawLine(offsetX, scaleTypes.vertical);
      this.#drawNumber(i, offsetX, 0, "top");
    }
    for (let i = 0; i < this.#horizontalMarkersNumber; i += this.#step) {
      const offsetY =
        i * this.#mark.getSize() +
        this.#mark.getSize() +
        this.#mark.getOffset();

      this.#drawLine(offsetY, scaleTypes.horizontal);
      this.#drawNumber(i, 0, offsetY, "right");
    }
  };
}
