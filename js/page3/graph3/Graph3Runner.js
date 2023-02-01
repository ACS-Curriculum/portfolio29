import ShowLines, { Pt, P } from "./ShowLines.js";

export default class Graph3Runner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var x1;
      var y1;
      var x2;
      var y2;
      var pt;
      var pts = [];
      var newPts = [];
      var newX = 0;
      var newY = 0;
      var m;
      var b;
      var numDots;
      var rm;
      var bm;
      var on = false;
      var fr = 2;
      var r;
      var g;
      var b;
      var x;
      var y;
      var newArr = [];
      var keepPoints = [];
      var sl = [];
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(400, 400);
        sketch.colorMode(sketch.HSB);
        r = 360;
        g = 100;
        b = 100;
        sketch.startIt();
        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(0, 0, 60);
        sketch.translate(sketch.width / 2, sketch.height / 2);
        var d = sketch.dist(x1, y1, x2, y2);
        for (var i = 0; i <= d; i += 10) {
          var nx = sketch.ler(x1, x2, i / d);
          var ny = sketch.ler(y1, y2, i / d);
          sketch.fill(255 * i / d, 255, 255);
          sketch.ellipse(nx, ny, 10, 10);
        }
        x1 = sketch.ler(x1, x2, 3 / d);
        y1 = sketch.ler(y1, y2, 3 / d);
        newPts.push(new P(x1, y1, r, g, b));
        newArr.push(new P(x1, y1, r, g, b));
        if (newPts.length > -1) {
          for (var i = 0; i < newPts.length; i++) {
            newPts[i].display(sketch);
          }
        }
        if (newArr.length > -1) {
          for (var i = 0; i < newArr.length; i++) {
            newArr[i].display(sketch);
          }
        }
        if (sl.length > 1) {
          for (var i = 0; i < sl.length; i++) {
            sl[i].display(sketch);
          }
        }
        pt.display(sketch);
        if (x1 > x2 - 5) {
          if (sketch.frameCount % 120 == 0) {
            sketch.startIt();
          }
        }
        sketch.strokeWeight(1);
        sketch.stroke(0);
        sketch.line(0, -350, 0, 350);
        sketch.line(-350, 0, 350, 0);

        sketch.textSize(20);
        sketch.text("slope: " + rm, -350, -350);
        sketch.text("y intercept: " + bm, -350, -350);
      };
      sketch.resetIt = () => {
        pts = [];
        newPts = [];
        newArr = [];
        keepPoints = [];
        sl = [];
        r = random(10, 360);
        g = random(95, 100);
        b = random(95, 100);
        x1 = floor(random(-150, 150));
        y1 = floor(random(-150, 150));
        x2 = floor(random(-150, 150));
        y2 = floor(random(-150, 150));
        sl.push(new ShowLines(x1, y1, x2, y2, rm, bm));

        pt = new Pt(x1, y1, x2, y2);
        m = (y2 - y1) / (x2 - x1);
        rm = Math.round(m * 100.0) / 100;
        rm = rm * -1;
        b = y1 - m * x1;
        bm = Math.round(b * 100.0) / 100;
      };
      sketch.startIt = () => {
        r = sketch.random(10, 360);
        g = sketch.random(95, 100);
        b = sketch.random(95, 100);
        x1 = sketch.floor(sketch.random(-150, 150));
        y1 = sketch.floor(sketch.random(-150, 150));
        x2 = sketch.floor(sketch.random(-150, 150));
        y2 = sketch.floor(sketch.random(-150, 150));
        sl.push(new ShowLines(x1, y1, x2, y2, rm, bm));
        newPts = [];
        pt = new Pt(x1, y1, x2, y2);
        m = (y2 - y1) / (x2 - x1);
        rm = Math.round(m * 100.0) / 100;
        rm = rm * -1;
        b = y1 - m * x1;
        bm = Math.round(b * 100.0) / 100;
      };
      sketch.ler = (v0, v1, t) => {
        return (1 - t) * v0 + t * v1;
      };
      sketch.ler2 = (x1, x2, y1, y2, t) => {
        var y = y1 + (t - x1) * (y2 - y1) / (x2 - x1);
        return y;
      };
    }, div);
  }
}
