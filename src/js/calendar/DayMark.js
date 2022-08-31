export class DayMark {
  strokeWidth = 1;

  constructor({ size = 0, color = "#000000", ctx = null }) {
    this.size = size;
    this.halfSize = Math.floor(size / 2);
    this.color = color;
    this.ctx = ctx;
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;
  }

  drawEmpty = (x, y) => {
    const markX = x + this.halfSize - Math.floor(this.halfSize / 2);
    const markY = y + this.halfSize - Math.floor(this.halfSize / 2);
    this.ctx.strokeRect(markX, markY, this.halfSize, this.halfSize);
  };

  drawFilled = (x, y) => {
    const markX = x + this.halfSize - Math.floor(this.halfSize / 2);
    const markY = y + this.halfSize - Math.floor(this.halfSize / 2);

    this.ctx.beginPath();
    this.ctx.rect(markX, markY, this.halfSize, this.halfSize);
    this.ctx.fill();
    this.ctx.stroke();
  };
}
