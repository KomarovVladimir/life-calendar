import { MarkedField } from "./MarkedField";
import { Scale } from "./Scale";
import { Mark } from "./Mark";

//TODO: Migrate to ts
export class Calendar {
  #marksTotal;
  #marksPerRow;
  #field;
  #scale;
  #mark;

  constructor({
    marks: { filled, total, perRow },
    markProps: { size, color },
    scaleProps: { step } = {},
    ctx,
  }) {
    this.#mark = new Mark({ ctx, size, color });
    this.#field = new MarkedField({
      mark: this.#mark,
      marks: { total, filled, perRow },
    });
    this.#scale = new Scale({
      step,
      mark: this.#mark,
      horizontalMarkersNumber: perRow,
      verticalMarkersNumber: perRow,
      ctx,
    });
    this.#marksPerRow = perRow;
    this.#marksTotal = total;
  }

  getWidth = () => this.#mark.getSize() * this.#marksPerRow;

  getHeight = () =>
    this.#mark.getSize() * Math.ceil(this.#marksTotal / this.#marksPerRow);

  draw = () => {
    this.#scale.draw();
    this.#field.draw(this.#scale.getOffset(), this.#scale.getOffset());
  };
}
