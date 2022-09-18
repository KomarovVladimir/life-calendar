export class Mark {
  #size;
  #fieldSize;
  #fieldOffset;
  #ctx;

  constructor({ size = 16, color = "#000000", ctx = null }) {
    this.#size = size;
    this.#fieldSize = Math.floor(this.#size / 2);
    this.#fieldOffset = this.#fieldSize - Math.floor(this.#fieldSize / 2);
    this.#ctx = ctx;
    this.#ctx.strokeStyle = color;
    this.#ctx.fillStyle = color;
  }

  getSize = () => this.#size;

  getOffset = () => this.#fieldOffset;

  setCtxTranslate = (x, y) => this.#ctx.translate(x, y);

  draw = (column, row, isFilled) => {
    if (isFilled) {
      this.#ctx.beginPath();
      this.#ctx.rect(
        column * this.#size + this.#fieldOffset,
        row * this.#size + this.#fieldOffset,
        this.#fieldSize,
        this.#fieldSize
      );
      this.#ctx.fill();
      this.#ctx.stroke();
    } else {
      this.#ctx.strokeRect(
        column * this.#size + this.#fieldOffset,
        row * this.#size + this.#fieldOffset,
        this.#fieldSize,
        this.#fieldSize
      );
    }
  };
}
