import { Calendar } from "./Calendar";

export class Canvas {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #calendar;

  constructor({ markSize = 16, color } = {}) {
    this.#calendar = new Calendar({
      marks: { filled: 50, total: 600, perRow: 73 },
      markProps: { size: markSize, color },
      scaleProps: { step: 3 },
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
