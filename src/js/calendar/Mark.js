import { markTypes } from "./constants";

export class Mark {
  #cellSize;
  #squareSize;
  #circleRadius;
  #color;
  #ctx;
  #type;

  constructor({
    size = 16,
    color = "#000000",
    ctx = null,
    type = markTypes.circle,
  }) {
    this.#cellSize = size;
    this.#squareSize = Math.floor(this.#cellSize / 2);
    this.#circleRadius = Math.floor(this.#squareSize / 2);
    this.#ctx = ctx;
    this.#color = color;
    this.#type = type;
  }

  getSize = () => this.#cellSize;

  setTranslate = (x = 0, y = 0) => {
    this.#ctx.translate(x, y);
  };

  setMarkType = (type) => {
    this.#type = type;
  };

  draw = (x, y, isFilled = false) => {
    this.#ctx.strokeStyle = this.#color;
    this.#ctx.fillStyle = this.#color;

    switch (this.#type) {
      case markTypes.square:
        if (isFilled) {
          this.#ctx.beginPath();
          this.#ctx.rect(x, y, this.#squareSize, this.#squareSize);
          this.#ctx.fill();
          this.#ctx.stroke();
        } else {
          this.#ctx.strokeRect(x, y, this.#squareSize, this.#squareSize);
        }

        break;

      case markTypes.circle:
        this.#ctx.beginPath();
        this.#ctx.arc(
          x + this.#circleRadius,
          y + this.#circleRadius,
          this.#circleRadius,
          0,
          360
        );
        if (isFilled) {
          this.#ctx.fill();
          this.#ctx.stroke();
        } else {
          this.#ctx.stroke();
        }
        break;

      default:
        break;
    }
  };
}
