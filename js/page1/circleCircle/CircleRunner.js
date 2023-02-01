//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Lines, { Circs } from "./all.js";

export default class CircleRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      let lines = [];
      var circs = [];
      var lineAng = 0;
      var circAng = 0;
      var rad = 100;
      let buttonStart;
      let buttonStop;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        sketch.angleMode(sketch.DEGREES);
        sketch.colorMode(sketch.HSB);
        buttonStart = sketch.createButton("start");
        buttonStart.mousePressed(sketch.resetGame);
        buttonStop = sketch.createButton("stop");
        buttonStop.mousePressed(sketch.stopThis);
        sketch.resetGame();
      };

      sketch.draw = () => {
        sketch.background(12, 2, 70);
        sketch.translate(sketch.width / 2, sketch.height / 2);

        for (var i = 0; i < 26; i++) {
          lines[i].display();
        }
        for (var i = 0; i < 26; i++) {
          circs[i].display();
          circs[i].move();
        }
      };
      sketch.resetGame = () => {
        sketch.loop();
        lines = [];
        circs = [];
        lineAng = 0;
        circAng = 0;
        rad = 100;
        for (var i = 0; i < 26; i++) {
          lines[i] = new Lines(lineAng, rad, sketch);
          lineAng += 7.5;
        }
        for (var i = 0; i < 26; i++) {
          circs[i] = new Circs(circAng, sketch);
          circAng += 7.5;
          var n = circs[i].myFromAngle(circAng, 200);
        }
      };
      sketch.stopThis = () => {
        sketch.noLoop();
      };
    }, div);
  }
}
