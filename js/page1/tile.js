export default class TileRunner {
  constructor(canvasWidth, canvasHeight, div) {
    var level;
    var len;
    var buttonStart;
    new p5(function(sketch) {
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);

        len = sketch.width;
        level = 1;
        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetGame);
      };

      sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255, 0, 0);
        sketch.stroke(0);
        sketch.strokeWeight(10);
        sketch.drawChair(len, len, level);
      };
      sketch.resetGame = () => {
        level = sketch.floor(sketch.random(1, 6));
      };
      sketch.drawChair = (x, y, lev) => {
        if (lev == 0) {
          sketch.beginShape();
          sketch.vertex(0, 0);
          sketch.vertex(len, 0);
          sketch.vertex(len, len / 2);
          sketch.vertex(len / 2, len / 2);
          sketch.vertex(len / 2, len);
          sketch.vertex(0, len);
          sketch.endShape(sketch.CLOSE);
        } else {
          sketch.push(); //red
          sketch.translate(len, 0);
          sketch.rotate(sketch.radians(90));
          sketch.scale(0.5);
          sketch.drawChair(x, y, lev - 1);
          sketch.pop();

          sketch.push(); //green
          sketch.translate(0, 0);
          sketch.rotate(sketch.radians(0));
          sketch.scale(0.5);
          // fill(0, 255, 0);
          sketch.drawChair(x, y, lev - 1);
          sketch.pop();

          sketch.push(); //blue
          sketch.translate(0, len);
          sketch.rotate(sketch.radians(-90));
          sketch.scale(0.5);
          //fill(0, 0, 255);
          sketch.drawChair(x, y, lev - 1);
          sketch.pop();

          sketch.push(); //white
          sketch.translate(len / 4, len / 4);
          sketch.rotate(sketch.radians(0));
          sketch.scale(0.5);
          ///fill(255);
          sketch.drawChair(x, y, lev - 1);
          sketch.pop();
        }
      };
    }, div);
  }
}
