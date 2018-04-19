import Shape from 'engine/system/shape';
const { PI } = Math;

export default class Circle extends Shape {
  constructor(context, {x, y}, r, color) {
    super(context, {x, y});
    this.r = r;
    this.color = color;
  }

  render() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r * 2, 0, PI * 360);
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
  }
}

export default Circle;
