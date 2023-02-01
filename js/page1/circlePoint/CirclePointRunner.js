import Circle, { Pt } from "./CirclePoint.js";

export default class CirclePointRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var angle = 0;
      var angle2 = 0;
      var circles = [];
      var circ;
      var x = 0;
      var y = 0;
      var num = 0;
      var c;
      var bigCirclePoints = [];
      var button;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        button = sketch.createButton("reset");
        button.mousePressed(sketch.playAgain);
        sketch.playAgain();
      };
      // ES5 function expression
      sketch.setup2 = function() {
        sketch.createCanvas(400, 400);
        button = sketch.createButton("reset");
        button.mousePressed(playAgain);
        sketch.playAgain();
      };

      sketch.draw = () => {
        sketch.background(220);
        sketch.translate(sketch.width / 2, sketch.height / 2);
        sketch.makeCircles();
        sketch.overlap();
        for (var i = 0; i < bigCirclePoints.length; i++) {
          bigCirclePoints[i].display();
        }
      };
      sketch.sum = function(a, b) {
        return a + b;
      };

      // ES6 arrow function
      sketch.sum = (a, b) => {
        return a + b;
      };
      sketch.playAgain = () => {
        angle = 0;
        angle2 = 0;
        circles = [];
        circ;
        x = 0;
        y = 0;
        num = 0;
        c;
        bigCirclePoints = [];
        circ = new Circle(
          sketch.random(-100, 100),
          sketch.random(-100, 100),
          sketch.random(100),
          sketch
        );
        circles.push(circ);
        sketch.stroke(0);
        sketch.strokeWeight(7);
        for (var i = 0; i < 100; i++) {
          x = sketch.cos(angle) * 150;
          y = sketch.sin(angle) * 150;
          angle += 0.5;
          bigCirclePoints.push(new Pt(x, y, sketch));
        }
      };
      sketch.makeCircles = () => {
        for (var i = 0; i < circles.length; i++) {
          var r = sketch.random(2, 8);
          var x1 =
            sketch.cos(sketch.random(angle2)) *
            sketch.floor(sketch.random(200));
          var y1 =
            sketch.sin(sketch.random(angle2)) *
            sketch.floor(sketch.random(200));
          angle2 += 0.1;
          if (sketch.abs(x1 * x1) + sketch.abs(y1 * y1) < 22500) {
            var newCircle = new Circle(x1, y1, r, sketch);
            for (var j = 0; j < circles.length; j++) {
              var other = circles[j];
              var d = sketch.dist(newCircle.x, newCircle.y, other.x, other.y);
              if (d < other.r + 2) {
                newCircle = undefined;
                break;
              }
            }
            if (newCircle) {
              circles.push(newCircle);
            }
          }
        }
      };

      sketch.overlap = () => {
        for (var i = 0; i < circles.length; i++) {
          var c = circles[i];
          c.display();
          if (c.growing) {
            c.grow();
            // Does it overlap any previous circles?
            for (var j = 0; j < circles.length; j++) {
              var other = circles[j];
              if (other != c) {
                var d = sketch.dist(c.x, c.y, other.x, other.y);
                if (d - 1 < c.r + other.r) {
                  c.growing = false;
                }
              }
            }
            // Is it stuck to an edge?
            if (c.growing) {
              c.growing = !c.edges();
            }
          }
        }
      };
    }, div);
  }
}
