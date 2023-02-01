import Lin from "./Lin.js";

export default class Graph2Runner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var newPts = [];
      var newPtsx = [];
      var newPtsy = [];
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
      var t = 0;
      var d;
      var index;
      var g = 0;
      var nums = [];
      var lin = [];
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight, div);
        sketch.resetIt();
        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(230);
        sketch.translate(sketch.width / 2, sketch.height / 2);
        sketch.drawGrid();
        sketch.drawDots();
      };

      sketch.drawDots = () => {
        if (sketch.frameCount % 60 == 0) {
          newPts.push(sketch.random(lin));
        }
        if (newPts.length > 1) {
          for (var i = 0; i < newPts.length - 1; i += 1) {
            newPts[i].display(sketch);
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
        newPts = [];
        newPtsx = [];
        newPtsy = [];
        xmax = 10;
        ymax = 10;
        xmin = -10;
        ymin = -10;
        x = xmin;
        rangex = xmax - xmin;
        rangey = ymax - ymin;
        index = 0;
        xscl = sketch.width / rangex;
        yscl = -sketch.height / rangey;
        for (var i = -180; i < 180; i += 20) {
          nums.push(i);
        }
        for (var i = 0; i < 20; i++) {
          var x0 = sketch.random(nums);
          var y0 = sketch.random(nums);
          var x = sketch.random(nums);
          var y = sketch.random(nums);
          lin.push(new Lin(x0, y0, x, y));
        }
      };
    }, div);
  }
}
