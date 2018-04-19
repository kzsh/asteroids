import Entity from 'engine/entities/entity';
import Circle from 'engine/system/shape/circle';

const gravitationalFactor = 1;
export default class Ball extends Entity {

  constructor(x, y, dx, dy, r, mass, color) {
    super();
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.ddy = 0;
    this.ddx = 0;

    this.r = r;
    this.mass = mass;
    this.color = color;
  }

  update(delta, entities) {
    let ddx = this.ddx;
    let ddy = this.ddy;
    let velocityFactor = delta * 50;

    for(let e of entities) {
      let r = Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
      if (r > e.r && r > this.r) {
        ddx += ((e.x - this.x) * e.mass * this.mass * gravitationalFactor / Math.pow(r, 3)) || 0;
        ddy += ((e.y - this.y) * e.mass * this.mass * gravitationalFactor / Math.pow(r, 3)) || 0;
      }
    }

    this.x += this.dx;
    this.y += this.dy;

    this.dx += ddx;
    this.dy += ddy;
    this.ddx = ddx * delta;
    this.ddy = ddy * delta;
  }

  render(context) {
    new Circle(context, {x: this.x, y: this.y}, this.r).render();

    context.fillText("m:" + this.mass.toPrecision(2), this.x + 17, this.y - 10);
    context.fillStyle = "#00F";
    context.fill();

    context.fillText("r:" + this.r.toPrecision(2), this.x + 50, this.y - 10);
    context.fillStyle = "#000";
    context.fill();

    context.fillText("vel:" + this.dx.toPrecision(2) + ", " + this.dy.toPrecision(2), this.x + 17, this.y);
    context.fillStyle = "#000";
    context.fill();

    context.fillText(`acc x: ${this.ddx.toPrecision(2)}`, this.x + 17, this.y + 10);
    context.fillStyle = "#000";
    context.fill();

    context.fillText(`acc y: ${this.ddy.toPrecision(2)}`, this.x + 17, this.y + 20);
    context.fillStyle = "#000";
    context.fill();
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.strokeStyle = "black";
    context.lineTo(this.x + this.r + 10 * this.dx, this.y + this.r + 10 * this.dy);
    context.stroke();

    context.beginPath();
    context.moveTo(this.x, this.y);
    context.strokeStyle = "#F00";
    context.lineTo(this.x + this.r + 10e2 * this.ddx, this.y + this.r + 10e2 * this.ddy);
    context.stroke();
  }

}
