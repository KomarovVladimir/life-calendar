import moment from "moment";

import { Field } from "./Field";

const TEMP_TOTAL = 23376;
const TEMP_FILLED = 12000;
const TEMP_PER_ROW = 67;

export class Calendar {
  // #lifeExpectancy;
  #markSize;
  #field;

  //TODO: Replace the birthday and the lifeExpectancy with dynamic data
  constructor({ birthday, lifeExpectancy = 90, markSize, color, ctx }) {
    this.#markSize = markSize;
    this.#field = new Field({
      markProps: { size: markSize, color },
      marks: { total: TEMP_TOTAL, filled: TEMP_FILLED, perRow: TEMP_PER_ROW },
      ctx,
    });
    // this.#lifeExpectancy = lifeExpectancy;
  }

  getWidth = () => this.#markSize * TEMP_PER_ROW;

  getHeight = () => this.#markSize * Math.ceil(TEMP_TOTAL / TEMP_PER_ROW);

  draw = () => {
    this.#field.draw();
  };
}
