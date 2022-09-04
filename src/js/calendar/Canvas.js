import { Calendar } from "./Calendar";

const WEEKS_NUMBER = 52;
const YEARS_NUMBER = 90;
export class Canvas {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #calendar;

  constructor({ markSize = 16, color } = {}) {
    this.#calendar = new Calendar({ markSize, color, ctx: this.#ctx });
    this.#canvas.width = this.#calendar.getWidth();
    this.#canvas.height = this.#calendar.getHeight();
  }

  render = (container) => {
    this.#calendar.draw();
    container.append(this.#canvas);
  };
}
