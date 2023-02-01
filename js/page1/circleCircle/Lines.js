export default class Lines {
  constructor(angle, rad, p5) {
    this.angle = angle;
    this.rad = rad;
    this.p5 = p5;
    // console.log(this.newRandomVec());
    // this.fr = p5.Vector.fromAngle(p5.radians(this.angle), this.rad * 2);
    //this.g = this.newRandomVec();
    this.fr = this.newRandomVec();
    console.log("hey " + this.fr);

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
    //this.fr = vec;
    this.p5.redraw();
    return vec;
  }
}
