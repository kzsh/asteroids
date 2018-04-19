import Entity from 'engine/entities/entity';
import Circle from 'engine/system/shape/circle';

const gravitationalFactor = 5;
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

    for(let e of entities) {
      let r = Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
      if (r > 5 * e.r && r > 5 * this.r) {
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
    new Circle(context, {x: this.x, y: this.y}, this.r, this.color).render();

    context.beginPath();
    context.fillStyle = "#00F";
    context.fillText("m:" + this.mass.toPrecision(2), this.x + 17, this.y - 10);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#000";
    context.fillText("r:" + this.r.toPrecision(2), this.x + 50, this.y - 10);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#000";
    context.fillText("vel:" + this.dx.toPrecision(2) + ", " + this.dy.toPrecision(2), this.x + 17, this.y);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#000";
    context.fillText(`acc x: ${this.ddx.toPrecision(2)}`, this.x + 17, this.y + 10);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#000";
    context.fillText(`acc y: ${this.ddy.toPrecision(2)}`, this.x + 17, this.y + 20);
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.ddx * 10e3, this.y + this.ddy * 10e3);
    context.strokeStyle = "#F00";
    context.lineWidth = 3;
    context.stroke();
    context.lineWidth = 1;
    context.closePath();

    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.dx * 100, this.y + this.dy * 100);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
  }

}
