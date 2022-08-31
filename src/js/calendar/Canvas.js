import { Calendar } from "./Calendar";
export class Canvas {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #calendar = new Calendar({ ctx: this.#ctx });

  constructor({ width = 0, height = 0 } = {}) {
    this.#canvas.width = width;
    this.#canvas.height = height;
  }

  render = (container) => {
    this.#calendar.draw();
    container.append(this.#canvas);
  };
}
