var angle = 0;
var angle2 = 0;
var circles = [];
var circ;
var x = 0;
var y = 0;
var num = 0;
var maxi = 100;
var c;
var dx;
var dy;
var bigCirclePoints = [];
//https://stackoverflow.com/questions/481144/equation-for-testing-if-a-point-is-inside-a-circle
function setup () {
  createCanvas (400, 400);
  resetThis ();
}

function draw () {
  background (220);

  // Let's try to make a certain number of new circles each frame
  // More later
  var target = 1 + constrain (floor (frameCount / 120), 0, 20);
  // How many
  var count = 0;
  // Try N times
  translate (width / 2, height / 2);

  //for (var i = 0; i < 2000; i++) {
  if (overlap ()) {
    count++;
  }
  // We made enough
  //if (count == target) {
  // break;
  //}
  //}

  // We can't make any more
  if (count < 1) {
    //noLoop();
    //console.log("finished");
  }
  for (var i = 0; i < bigCirclePoints.length; i++) {
    bigCirclePoints[i].display ();
  }

  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    c.display ();

    // Is it a growing one?
    if (c.growing) {
      c.grow ();
      // Does it overlap any previous circles?
      for (var j = 0; j < circles.length; j++) {
        var other = circles[j];
        if (other != c) {
          var d = dist (c.x, c.y, other.x, other.y);
          if (d - 1 < c.r + other.r) {
            c.growing = false;
          }
        }
      }
      // Is it stuck to an edge?
      if (c.growing) {
        c.growing = !c.edges ();
      }
    }
  }

  if (frameCount % 160 == 0) {
    //overlap();
    resetThis ();
  }
}

class Circle {
  constructor (x, y, r) {
    this.growing = true;
    this.x = x;
    this.y = y;
    this.r = r;
  }
  display () {
    noFill ();
    stroke (255, 0, 0);
    strokeWeight (2);
    ellipse (this.x, this.y, this.r, this.r);
  }
  // Check stuck to an edge
  edges () {
    return (
      this.r > width - this.x ||
      this.r > this.x ||
      this.r > height - this.y ||
      this.r > this.y
    );
  }
  // Grow
  grow () {
    this.r += 0.5;
  }
}
//try 3 as rad
//they do not grow
//cannot get rounded pack
//sort the array biggest to smallest
//then place them if they do not fit try hte next one down

function overlap () {
  // Here's a new circle
  for (var i = 0; i < circles.length; i++) {
    var r = random (2, 8);
    x1 = cos (random (angle2)) * floor (random (200));
    y1 = sin (random (angle2)) * floor (random (200));
    angle2 += 0.1;
    if (abs (x1 * x1) + abs (y1 * y1) < 22500) {
      var newCircle = new Circle (x1, y1, r);
      for (var j = 0; j < circles.length; j++) {
        var other = circles[j];
        var d = dist (newCircle.x, newCircle.y, other.x, other.y);
        if (d < other.r + 2) {
          newCircle = undefined;
          break;
        }
      }
      if (newCircle) {
        circles.push (newCircle);
        //return true;
      }
    }
    //return false;
  }
}
class Pt {
  constructor () {
    this.x = x;
    this.y = y;
  }
  display () {
    stroke (0);
    strokeWeight (4);
    point (this.x, this.y);
  }
}

function resetThis () {
  angle = 0;
  angle2 = 0;
  circles = [];
  circ;
  x = 0;
  y = 0;
  num = 0;
  maxi = 100;
  c;
  dx;
  dy;
  bigCirclePoints = [];

  circ = new Circle (random (-100, 100), random (-100, 100), random (100, 110));
  circles.push (circ);

  stroke (0);
  strokeWeight (7);
  for (var i = 0; i < 100; i++) {
    x = cos (angle) * 150;
    y = sin (angle) * 150;
    angle += 0.5;
    bigCirclePoints.push (new Pt (x, y));
  }
}
