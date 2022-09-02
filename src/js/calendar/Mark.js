export class Mark {
  #markSize;
  #fieldSize;
  #fieldOffset;
  #ctx;

  constructor({ markSize = 16, color = "#000000", ctx = null }) {
    this.#markSize = markSize;
    this.#fieldSize = Math.floor(this.#markSize / 2);
    this.#fieldOffset = this.#fieldSize - Math.floor(this.#fieldSize / 2);
    this.#ctx = ctx;
    this.#ctx.strokeStyle = color;
    this.#ctx.fillStyle = color;
  }

  getSize = () => this.#markSize;

  drawEmpty = (x, y) => {
    this.#ctx.strokeRect(
      x + this.#fieldOffset,
      y + this.#fieldOffset,
      this.#fieldSize,
      this.#fieldSize
    );
  };

  drawFilled = (x, y) => {
    console.log(this.#markSize, this.#fieldSize);
    this.#ctx.beginPath();
    this.#ctx.rect(
      x + this.#fieldOffset,
      y + this.#fieldOffset,
      this.#fieldSize,
      this.#fieldSize
    );
    this.#ctx.fill();
    this.#ctx.stroke();
  };
}
