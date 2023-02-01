import Player from "./Player.js";

export default class RockRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      let p;
      let rad;
      let diam;
      let buttonStart;
      let buttonStop;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        sketch.ellipseMode(sketch.CENTER);
        sketch.resetGame();
        buttonStart = sketch.createButton("start");
        buttonStart.mousePressed(sketch.resetGame);
        buttonStop = sketch.createButton("stop");
        buttonStop.mousePressed(sketch.stopThis);
      };

      sketch.draw = () => {
        //sketch.background (0, 0, 139);
        sketch.background("#FFC514");
        for (let i = p.length - 1; i >= 0; i--) {
          p[i].move(sketch);
          p[i].show(sketch);
        }

        sketch.testRockPaper();
        if (sketch.twoTheSame(p) == true) {
          sketch.textSize(30);
          sketch.textAlign(sketch.CENTER);
          sketch.text(
            "You're a winner,      !",
            sketch.width / 2,
            sketch.height / 2
          );
          //let git = sketch.createCounter2 ();
          //git ();
          sketch.createCounter();
        }
      };
      sketch.createCounter = () => {
        let counter = 0;
        counter++;
        if (sketch.frameCount % 40 == 0) {
          sketch.noLoop();
        }
      };
      sketch.createCounter2 = () => {
        let counter = 0;
        setInterval(increment, 1000);
        function increment() {
          counter++;
          if (counter == 2) {
            sketch.noLoop();
            //console.log ('git er done');
          }
        }
        return increment;
      };
      sketch.resetGame = () => {
        sketch.loop();
        sketch.ellipseMode(sketch.CENTER);
        p = [];
        diam = 40;
        rad = diam / 2;

        for (let i = 0; i < 5; i++) {
          p.push(new Player("📝", "paper", sketch));
        }
        for (let i = 5; i < 10; i++) {
          p.push(new Player("🪨", "rock", sketch));
        }
        for (let i = 10; i < 15; i++) {
          p.push(new Player("✂️", "scissors", sketch));
        }
      };
      sketch.stopThis = () => {
        sketch.noLoop();
      };
      sketch.allTheSame = p => {
        let first = p[0].id;
        return p.every(function(element) {
          return element.id === first;
        });
      };
      sketch.twoTheSame = p => {
        let roc = 0;
        let pape = 0;
        let scis = 0;
        for (let i = 0; i < p.length; i++) {
          if (p[i].id == "rock") {
            roc += 1;
          }
          if (p[i].id == "paper") {
            pape = pape + 1;
          }
          if (p[i].id == "scissors") {
            scis = scis + 1;
          }
        }
        if (pape > 0 && roc > 0 && scis < 1) {
          sketch.text("📝", 300, 200);
          return true;
        } else if (pape > 0 && scis > 0 && roc < 1) {
          sketch.text("✂️", 300, 200);
          return true;
        } else if (scis > 0 && roc > 0 && pape < 1) {
          sketch.text("🪨", 300, 200);
          return true;
        }
      };
      sketch.testRockPaper = () => {
        for (let i = p.length - 1; i >= 0; i--) {
          for (let j = p.length - 1; j >= 0; j--) {
            if (p[i].id != p[j].id && p[i].collide(p[j]) === true) {
              sketch.textAlign(sketch.CENTER);
              sketch.fill("#F23030");
              sketch.text("OH SNAP!", sketch.width / 2, sketch.height / 2);

              if (p[i].id != p[j].id && p[i].whatKind(p[j]) === "paper") {
                p[i].id = "paper";
                p[j].id = "paper";
                p[i].t = "📝";
                p[j].t = "📝";
              }

              if (p[i].id != p[j].id && p[i].whatKind(p[j]) === "rock") {
                p[i].id = "rock";
                p[j].id = "rock";
                p[i].t = "🪨";
                p[j].t = "🪨";
              }

              if (p[i].id != p[j].id && p[i].whatKind(p[j]) === "scissors") {
                p[i].id = "scissors";
                p[j].id = "scissors";
                p[i].t = "✂️";
                p[j].t = "✂️";
              }
            }
          }
        }
      };
    }, div);
  }
}
