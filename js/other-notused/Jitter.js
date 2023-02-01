let sketch1 = function (b) {
  'use strict';
  let bug;
  let jit;

  b.setup = function () {
    b.createCanvas (480, 120);
    b.background (220);
    // Smaller circle
    bug = new Jitter (b, 480 / 2, 120 / 2, 20);
    // Bigger circle
    jit = new Jitter (b, 100, 100, 50);
  };

  b.draw = function () {
    bug.move ();
    bug.display ();
    jit.move ();
    jit.display ();
  };
};

class Jitter {
  constructor (_b, tempX, tempY, tempDiameter) {
    this.b = _b;
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2.5;
  }

  move () {
    this.x += this.b.random (-this.speed, this.speed);
    this.y += this.b.random (-this.speed, this.speed);
    // Constrain keeps the circle from leaving canvas
    this.x = this.b.constrain (this.x, 0, this.b.width);
    this.y = this.b.constrain (this.y, 0, this.b.height);
  }

  display () {
    this.b.ellipse (this.x, this.y, this.diameter, this.diameter);
  }
}
new p5 (sketch1, 'container');
