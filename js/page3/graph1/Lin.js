export default class Lin {
  constructor(x1, y1, x3, y3, p5) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1;
    this.y2 = y1;
    this.x3 = x3;
    this.y3 = y3;

    this.cols = [
      60,
      80,
      100,
      120,
      140,
      160,
      180,
      200,
      220,
      240,
      260,
      280,
      300,
      320,
      340,
      360
    ];
    this.c = p5.floor(p5.random(0, this.cols.length));
    this.p5 = p5;
  }
  display() {
    this.p5.stroke(this.cols[this.c], 100, 100);
    this.p5.strokeWeight(4);
    this.p5.noFill();
    this.p5.ellipse(this.x3, this.y3, 20, 20);
    this.p5.fill(this.cols[this.c], 100, 100);

    this.p5.ellipse(this.x1, this.y1, 10, 10);
    this.p5.ellipse(this.x2, this.y2, 5, 5);
    this.x1 += (this.x3 - this.x1) * 0.1;
    this.y1 += (this.y3 - this.y1) * 0.1;
    this.p5.line(this.x1, this.y1, this.x2, this.y2);
    var d = this.p5.dist(this.x1, this.y1, this.x3, this.y3);
    if (d < 10) {
      this.c = 360;
    }
  }
}
