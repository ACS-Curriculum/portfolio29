export default class ShowLines {
  constructor(x1, y1, x2, y2, sl, inter, p5) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.sl = sl;
    this.p5 = p5;
    this.inter = inter;
    this.midx = (x2 - x1) / 2;
    this.midy = (y2 - y1) / 2;
  }
  display(p5) {
    p5.fill(255);
    p5.noStroke();
    p5.textSize(18);
  }
}
export class P {
  constructor(x, y, r, g, b, p5) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.b = b;
    this.g = g;
    this.p5 = p5;
  }
  display(p5) {
    p5.stroke(this.r, this.g, this.b);
    p5.strokeWeight(6);
    p5.point(this.x, this.y);
  }
}

export class Pt {
  constructor(x1, y1, x2, y2, p5) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.pts = [];
    this.p5 = p5;
  }
  display(p5) {
    p5.fill(0, 0, 255);
    //ellipse(this.x1, this.y1, 10, 10);
    //ellipse(this.x2, this.y2, 10, 10);
    p5.strokeWeight(9);
    p5.point(this.x1, this.y1);
    p5.point(this.x2, this.y2);

    p5.noStroke();
    p5.textSize(16);
    p5.text("x1: " + this.x1 + ",  y1: " + this.y1, this.x1 - 15, this.y1 - 10);
    p5.text("x2: " + this.x2 + ",  y2: " + this.y2, this.x2 - 15, this.y2 - 10);
  }
}
