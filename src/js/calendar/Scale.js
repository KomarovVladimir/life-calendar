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

  constructor({
    step = 5,
    mark = null,
    verticalMarkersNumber = 0,
    horizontalMarkersNumber = 0,
    ctx = null,
  }) {
    this.#ctx = ctx;
    this.#ctx.font = "16px serif";
    this.#mark = mark;
    this.#step = step;
    this.#verticalMarkersNumber = verticalMarkersNumber;
    this.#horizontalMarkersNumber = horizontalMarkersNumber;
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
    this.#ctx.fillText(number, x, y);
  };

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
