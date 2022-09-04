export class Scale {
  #ctx;
  #step;
  // #type;
  #markSize;
  #verticalMarkersNumber;
  #horizontalMarkersNumber;
  #lineLength = 16;

  constructor({
    // type = scaleTypes.horizontal,
    step = 5,
    markSize,
    verticalMarkersNumber,
    horizontalMarkersNumber,
    ctx,
  }) {
    this.#ctx = ctx;
    // this.#type = type;
    this.#step = step;
    this.#markSize = markSize;
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
    for (let i = 0; i < this.#verticalMarkersNumber; i++) {
      this.#drawVerticalLine(i * this.#markSize + this.#markSize);
    }
    for (let i = 0; i < this.#horizontalMarkersNumber; i++) {
      this.#drawHorizontalLine(i * this.#markSize + this.#markSize);
    }
  };
}
