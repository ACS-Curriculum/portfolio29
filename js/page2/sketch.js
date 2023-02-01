export default class MyTest {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      let x = 100;
      let y = 100;

      sketch.setup = () => {
        sketch.createCanvas(400, 400);
      };

      sketch.draw = () => {
        sketch.background("#FFC514");
        sketch.fill(255);
        sketch.rect(x, y, 50, 50);
      };
    }, div);
  }
}
