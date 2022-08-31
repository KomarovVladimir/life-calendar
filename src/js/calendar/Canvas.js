export class Canvas {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");

  constructor({ width = 0, height = 0 } = {}) {
    this.#canvas.width = width;
    this.#canvas.height = height;
  }

  getContext = () => this.#ctx;

  render = (container) => {
    container.append(this.#canvas);
  };
}
