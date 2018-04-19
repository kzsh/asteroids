import Entity from 'engine/entities/entity';

export default class Spaceship extends Entity {

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
    context.fillStyle = this.color;
    context.beginPath();
    context.fillStyle = '#f00';
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + 100, this.y + 50);
    context.lineTo(this.x + 50, this.y + 100);
    context.lineTo(this.x + 0, this.y + 90);
    context.closePath();
    context.fill();
  }

}
