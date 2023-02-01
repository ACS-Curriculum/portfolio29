export default class Player {
  constructor (t, id, p5) {
    this.x = p5.random (380);
    this.y = p5.random (380);
    this.t = t;
    this.nx = p5.random (1, -1);
    this.ny = p5.random (1, -1);
    this.r = 20;
    this.diam = 40;
    this.id = id;
    this.p5 = p5;
  }

  move (p5) {
    if (this.x > 400 - this.diam) {
      this.nx = p5.random (-6, 4);
    }
    if (this.x < 0 + this.diam) {
      this.nx = p5.random (6, 4);
    }
    if (this.y > 400 - this.diam) {
      this.ny = p5.random (-6, 4);
    }
    if (this.y < 0 + this.diam) {
      this.ny = p5.random (6, 4);
    } else {
      this.x += p5.random (3, -3);
      this.y += p5.random (3, -3);
    }
    this.x += p5.random (this.nx);
    this.y += p5.random (this.ny);
  }
  show (p5) {
    p5.fill (255);
    p5.textSize (30);
    p5.text (this.t, this.x, this.y);
    //text(this.id, this.x, this.y);
  }

  collide (other) {
    let d = this.p5.dist (this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    }
    return false;
  }
  whatKind (other) {
    let kind;
    if (
      (this.id === 'rock' && other.id === 'paper') ||
      (this.id === 'paper' && other.id === 'rock')
    ) {
      kind = 'paper';
    }
    if (
      (this.id === 'scissors' && other.id === 'paper') ||
      (this.id === 'paper' && other.id === 'scissors')
    ) {
      kind = 'scissors';
    }
    if (
      (this.id === 'rock' && other.id === 'scissors') ||
      (this.id === 'scissors' && other.id === 'rock')
    ) {
      kind = 'rock';
    }
    return kind;
  }
}

export class Paper extends Player {
  constructor (t, id) {
    super (t, id);
  }
}

export class Rock extends Player {
  constructor (t, id) {
    super (t, id);
  }
}

export class Scissors extends Player {
  constructor (t, id) {
    super (t, id);
  }
}
