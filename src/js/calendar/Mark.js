export class Mark {
  #size;
  #fieldSize;
  #fieldOffset;
  #ctx;

  constructor({ size = 0, color = "#000000", ctx = null }) {
    this.#size = size;
    this.#fieldSize = Math.floor(size / 2);
    this.#fieldOffset = this.#fieldSize - Math.floor(this.#fieldSize / 2);
    this.#ctx = ctx;
    this.#ctx.strokeStyle = color;
    this.#ctx.fillStyle = color;
  }

  getSize = () => this.#size;

  drawEmpty = (x, y) => {
    try {
      this.#ctx.strokeRect(
        x + this.#fieldOffset,
        y + this.#fieldOffset,
        this.#fieldSize,
        this.#fieldSize
      );
    } catch (error) {
      console.error(error);
    }
  };

  drawFilled = (x, y) => {
    try {
      this.#ctx.beginPath();
      this.#ctx.rect(
        x + this.#fieldOffset,
        y + this.#fieldOffset,
        this.#fieldSize,
        this.#fieldSize
      );
      this.#ctx.fill();
      this.#ctx.stroke();
    } catch (error) {
      console.error(error);
    }
  };
}
