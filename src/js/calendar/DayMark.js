export class DayMark {
  strokeWidth = 2;

  constructor({
    size = 0,
    width = 0,
    height = 0,
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
    this.width = width;
    this.height = height;
    this.color = color;
    this.filled = filled;
    this.ctx = ctx;
    this.offset = offset;
  }

  move = (x, y) => {
    this.x = x;
    this.y = y;
  };

  drawEmpty = () => {
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.strokeStyle = this.color;

    this.ctx.strokeRect(
      this.x + this.offset,
      this.y + this.offset,
      this.size,
      this.size
    );
  };

  drawFilled = () => {
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;

    this.ctx.strokeRect(
      this.x + this.offset,
      this.y + this.offset,
      this.size,
      this.size
    );
    this.ctx.fillRect(
      this.x + this.offset,
      this.y + this.offset,
      this.size,
      this.size
    );
  };
}
