import { Field } from "./Field";

//TODO: Migrate to ts
export class Calendar {
  #markSize;
  #marksTotal;
  #marksPerRow;
  #field;

  constructor({
    marks: { filled, total, perRow },
    markProps: { size, color },
    ctx,
  }) {
    this.#markSize = size;
    this.#marksPerRow = perRow;
    this.#marksTotal = total;
    this.#field = new Field({
      marks: { total, filled, perRow },
      markProps: { size, color },
      ctx,
    });
  }

  getWidth = () => this.#markSize * this.#marksPerRow;

  getHeight = () =>
    this.#markSize * Math.ceil(this.#marksTotal / this.#marksPerRow);

  draw = () => {
    this.#field.draw();
  };
}
