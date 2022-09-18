export class Mark {
  #size;
  #fieldSize;
  #ctx;

  constructor({ size = 16, color = "#000000", ctx = null }) {
    this.#size = size;
    this.#fieldSize = Math.floor(this.#size / 2);
    this.#ctx = ctx;
    this.#ctx.strokeStyle = color;
    this.#ctx.fillStyle = color;
  }

  getSize = () => this.#size;

  setTranslate = (x = 0, y = 0) => {
    this.#ctx.translate(x, y);
  };

  draw = (x, y, isFilled = false) => {
    if (isFilled) {
      this.#ctx.beginPath();
      this.#ctx.rect(x, y, this.#fieldSize, this.#fieldSize);
      this.#ctx.fill();
      this.#ctx.stroke();
    } else {
      this.#ctx.strokeRect(x, y, this.#fieldSize, this.#fieldSize);
    }
  };
}
