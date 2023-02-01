import Lin from "./Lin.js";

export default class Graph1Runner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var xscl;
      var yscl;
      var rangex;
      var rangey;
      var xmin;
      var ymin;
      var xmax;
      var ymax;
      var m;
      var b;
      var x;
      var y;
      var d;
      var nums;
      var lin;
      var num;
      var t;
      var i;
      var r, g, b;
      var diam;
      var offset;
      var x5;
      var y5;
      var buttonStart;
      var cols;
      var j;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        j = 0;
        sketch.angleMode(sketch.DEGREES);
        sketch.colorMode(sketch.HSB);
        cols = [
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
        diam = 150;
        offset = 0.2 * diam;
        x5 = sketch.width / 2;
        y5 = sketch.height / 2;
        sketch.resetIt();

        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(0, 0, 70);
        if (j < 1) {
          sketch.smilyFace();
        }
        sketch.translate(sketch.width / 2, sketch.height / 2);
        sketch.drawGrid();
        sketch.drawDots();
      };

      sketch.drawDots = () => {
        if (sketch.frameCount % 120 == 0) {
          var x3 = lin[j].x3;
          var y3 = lin[j].y3;
          var x1 = sketch.random(nums);
          var y1 = sketch.random(nums);
          lin.push(new Lin(x3, y3, x1, y1, sketch));
          j += 1;
        }
        for (var k = 0; k < lin.length - 1; k += 1) {
          if (lin.length > 1) {
            lin[k].display();
          }
        }
      };

      sketch.drawGrid = () => {
        sketch.stroke(0);
        sketch.strokeWeight(1);

        for (let i = xmin; i <= xmax + 1; i++) {
          sketch.line(i * xscl, ymin * yscl, i * xscl, ymax * yscl);
          sketch.text(i, i * xscl, 0);
        }
        for (let i = ymin; i <= ymax + 1; i++) {
          sketch.line(xmin * xscl, i * yscl, xmax * xscl, i * yscl);
          sketch.text(i, 0, i * yscl);
        }
        sketch.stroke(0);
        sketch.line(0, ymin * yscl, 0, ymax * yscl);
        sketch.line(xmin * xscl, 0, xmax * xscl, 0);
      };

      sketch.resetIt = () => {
        nums = [];
        lin = [];
        xmax = 10;
        ymax = 10;
        xmin = -10;
        ymin = -10;
        t = 0;
        j = 0;
        r = sketch.random(cols);
        g = 0;
        b = 0;
        num = 30;
        x = xmin;
        rangex = xmax - xmin;
        rangey = ymax - ymin;

        xscl = sketch.width / rangex;
        yscl = -sketch.height / rangey;
        for (var i = -180; i < 180; i += 20) {
          nums.push(i);
        }

        var x1 = sketch.random(nums);
        var y1 = sketch.random(nums);
        var x2 = sketch.random(nums);
        var y2 = sketch.random(nums);
        lin.push(new Lin(x1, y1, x2, y2, sketch));
      };
      sketch.smilyFace = () => {
        sketch.fill(50, 100, 100);
        sketch.ellipse(x5, y5, diam, diam);

        sketch.fill(r, g, b);
        sketch.ellipse(x5 - offset, y5 - offset, diam / 7, diam / 7);
        sketch.ellipse(x5 + offset, y5 - offset, diam / 7, diam / 7);
        sketch.noFill();
        sketch.arc(x5, y5, diam * 0.6, diam * 0.4, 0, 180);
      };
    }, div);
  }
}
