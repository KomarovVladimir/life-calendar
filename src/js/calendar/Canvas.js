import { Calendar } from "./Calendar";

export class Canvas {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #calendar;

  constructor({ markSize = 16, color } = {}) {
    this.#calendar = new Calendar({
      marks: { filled: 10, total: 100, perRow: 12 },
      markProps: { size: markSize, color },
      ctx: this.#ctx,
    });
    this.#canvas.width = this.#calendar.getWidth();
    this.#canvas.height = this.#calendar.getHeight();
  }

  render = (container) => {
    this.#calendar.draw();
    container.append(this.#canvas);
  };
}
