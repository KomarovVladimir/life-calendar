import { Calendar } from "./Calendar";

const WEEKS_NUMBER = 52;
const YEARS_NUMBER = 90;
export class Canvas {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #calendar;

  constructor({ markSize = 16, color } = {}) {
    this.#canvas.width = markSize * WEEKS_NUMBER;
    this.#canvas.height = markSize * YEARS_NUMBER;
    this.#calendar = new Calendar({ markSize, color, ctx: this.#ctx });
  }

  render = (container) => {
    this.#calendar.draw();
    container.append(this.#canvas);
  };
}
