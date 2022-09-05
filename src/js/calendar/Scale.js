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
    this.#mark = mark;
    this.#step = step;
    this.#verticalMarkersNumber = verticalMarkersNumber;
    this.#horizontalMarkersNumber = horizontalMarkersNumber;
  }

  #drawHorizontalLine = (offset) => {
    this.#ctx.beginPath();
    this.#ctx.moveTo(0, offset);
    this.#ctx.lineTo(this.#lineLength, offset);
    this.#ctx.stroke();
  };

  #drawVerticalLine = (offset) => {
    this.#ctx.beginPath();
    this.#ctx.moveTo(offset, 0);
    this.#ctx.lineTo(offset, this.#lineLength);
    this.#ctx.stroke();
  };

  draw = () => {
    for (let i = 0; i < this.#verticalMarkersNumber; i += this.#step) {
      this.#drawVerticalLine(
        i * this.#mark.getSize() + this.#mark.getOffset() + this.#mark.getSize()
      );
    }
    for (let i = 0; i < this.#horizontalMarkersNumber; i += this.#step) {
      this.#drawHorizontalLine(
        i * this.#mark.getSize() + this.#mark.getOffset() + this.#mark.getSize()
      );
    }
  };
}
