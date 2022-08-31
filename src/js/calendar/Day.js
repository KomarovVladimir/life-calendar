export class Day {
  constructor({
    size = 0,
    offset = 0,
    x = 0,
    y = 0,
    color = "#ffffff",
    filled = false,
    ctx = null,
  }) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.offset = offset;
    this.color = color;
    this.filled = filled;
    this.ctx = ctx;
  }

  move = (x, y) => {
    this.x = x;
    this.y = y;
  };

  draw = () => {
    if (this.filled) {
      this.ctx.fillStyle = this.color;
      this.ctx.strokeRect(this.x, this.y, this.size, this.size);
    } else {
      this.ctx.strokeStyle = this.color;

      this.ctx.strokeRect(this.x, this.y, this.size, this.size);
    }
  };
}
