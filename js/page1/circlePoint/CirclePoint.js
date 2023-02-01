export default class Circle {
  constructor(x, y, r, p5) {
    this.growing = true;
    this.x = x;
    this.y = y;
    this.r = r;
    this.p5 = p5;
  }
  display() {
    this.p5.noFill();
    this.p5.stroke(255, 0, 0);
    this.p5.strokeWeight(2);
    this.p5.ellipse(this.x, this.y, this.r, this.r);
  }
  edges() {
    return (
      this.r > this.p5.width - this.x ||
      this.r > this.x ||
      this.r > this.p5.height - this.y ||
      this.r > this.y
    );
  }
  grow() {
    this.r += 0.5;
  }
}
export class Pt {
  constructor(x, y, p5) {
    this.x = x;
    this.y = y;
    this.p5 = p5;
  }
  display() {
    this.p5.stroke(0);
    this.p5.strokeWeight(4);
    this.p5.point(this.x, this.y);
  }
}
