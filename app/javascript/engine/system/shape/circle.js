import Shape from 'engine/system/shape';
const { PI } = Math;

export default class Circle extends Shape {
  constructor(context, {x, y}, r) {
    super(context, {x, y});
    this.r = r;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.r * 2, 0, PI * 360);
    this.context.fillStyle = "#00F";
    this.context.fill();
  }
}

export default Circle;
