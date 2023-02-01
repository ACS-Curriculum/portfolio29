export default class Lines {
  constructor(angle, rad, p5) {
    this.angle = angle;
    this.rad = rad;
    this.p5 = p5;
    this.fr = this.newRandomVec();
    this.vx = this.fr.x;
    this.vy = this.fr.y;
  }
  display() {
    this.p5.push();
    this.p5.noFill();
    this.p5.strokeWeight(3);
    this.p5.stroke(0);
    this.p5.line(0, 0, -this.vx, -this.vy);
    this.p5.stroke(0);
    this.p5.line(0, 0, this.vx, this.vy);
    this.p5.pop();
  }
  newRandomVec() {
    var vec = p5.Vector.fromAngle(this.p5.radians(this.angle), this.rad * 2);
    return vec;
  }
}

export class Circs {
  constructor(angle, p5) {
    this.p5 = p5;
    this.angle = angle;
    this.rad2 = 100;
    this.fr = this.newRandomVec();
    this.vx = this.fr.x;
    this.vy = this.fr.y;
    this.r = this.p5.random(100, 360);
    this.g = 100;
    this.b = 100;
  }
  display(p5) {
    this.p5.push();
    this.p5.fill(this.r, this.g, this.b);
    this.x2 = this.p5.map(this.p5.sin(this.angle), -1, 1, -this.vx, this.vx);
    this.y2 = this.p5.map(this.p5.sin(this.angle), -1, 1, -this.vy, this.vy);
    this.p5.ellipse(this.x2, this.y2, 20, 20);
    this.p5.pop();
  }
  move() {
    this.angle -= 0.5;
  }

  myFromAngle(angle, distance) {
    //Get SOH
    var op = this.p5.sin(angle) * distance;
    //Get CAH
    var ad = this.p5.cos(angle) * distance;
    //Add to old Vector
    var newVect = this.p5.createVector(ad, op);
    return newVect;
  }
  newRandomVec() {
    var vec = p5.Vector.fromAngle(this.p5.radians(this.angle), this.rad2 * 2);
    return vec;
  }
}
