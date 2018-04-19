import Entity from 'engine/entities/entity';
import Circle from 'engine/system/shape/circle';

export default class Ball extends Entity {

  constructor(x, y, dx, dy, r, mass, color) {
    super();
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.r = r;
    this.mass = mass;
    this.color = color;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(context) {
    new Circle(context, {x: this.x, y: this.y}, this.r).render();

    context.fillText("" + this.dx.toPrecision(2) + ", " + this.dy.toPrecision(2), this.x + 17, this.y);
    context.fillStyle = "#000";
    context.fill();

    context.beginPath();
    context.moveTo(this.x, this.y);
    context.fillStyle = "#0F0";
    context.lineTo(this.x + 100 * this.dx, this.y + 100 * this.dy);
    context.stroke();
  }

}
