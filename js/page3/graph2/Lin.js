export default class Lin {
  constructor(x1, y1, x3, y3, p5) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1;
    this.y2 = y1;
    this.x3 = x3;
    this.y3 = y3;
    this.p5 = p5;
  }
  display(p5) {
    p5.stroke(255, 0, 0);
    p5.strokeWeight(3);
    this.x1 += (this.x3 - this.x1) * 0.06;
    this.y1 += (this.y3 - this.y1) * 0.06;
    p5.line(this.x1, this.y1, this.x2, this.y2);
  }
}
