// 雪の結晶を描画する
// 参考サイト
// https://www.openprocessing.org/sketch/805611
// https://note.com/nobkz/n/ne4fdbd97a162

let time = 0;
let number = 0;
// let techpark_logo_img;

class Snow {
  constructor() {
    // 雪の結晶の数
    this.snowflakeCount = 400;
    this.snowflakes = [];
  }

  createSnowflake() {
    return new (random([Snowflake,
      Snowflake2,
      Snowflake3]));
  }

  setup() {
    for (let i = 0; i < this.snowflakeCount; ++i) {
      let snowflake = this.createSnowflake();
      snowflake.move(random(-windowWidth / 2, windowWidth / 2), random(-windowHeight / 2, windowHeight / 2)).size(random(10, 100));

      snowflake.mainColor = color(random(10, 100), random(120, 205), random(150, 255), random(150, 200));

      while (!this.add(snowflake)) {
        snowflake.move(random(-windowWidth / 2, windowWidth / 2), random(-windowHeight / 2, windowHeight / 2)).size(random(10, 200));
      }
    }
  }

  add(newSnowflake) {
    if (this.snowflakes.every(snowflake => !snowflake.isCollision(newSnowflake))) {
      this.snowflakes.push(newSnowflake);
      return true;
    } else {
      return false;
    }
  }

  draw() {
    for (let snowflake of this.snowflakes) {
      snowflake.draw();
    }
  }

  update() {
    for (let snowflake of this.snowflakes) {
      snowflake.update();
    }
  }
}

class Snowflake {
  constructor() {
    this.number = number;
    number++;
    this.x = 0;
    this.y = 0;
    this.radius = 100;
    this.angle = 0;
    this.mainColor = color(0, 100, 255, 100);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  size(size) {
    this.radius = size / 2;
    return this;
  }

  rotate(a) {
    this.angle = a;
    return this;
  }

  distance(otherSnow) {
    return sqrt(pow(this.x - otherSnow.x, 2) + pow(this.y - otherSnow.y, 2));
  }

  isCollision(otherSnow) {
    return this.distance(otherSnow) < (otherSnow.radius + this.radius);
  }

  piece() {
    const radius = this.radius;
    const branchCount = 5;
    const branchAngle = PI / 4;
    stroke(this.mainColor);
    strokeWeight(1 + radius / 50);
    line(0, 0, 0, radius);

    push();
    for (let i = 0; i < branchCount; i++) {
      translate(0, radius / branchCount);
      push();
      rotate(branchAngle);
      line(0, 0, 0, radius / branchCount);
      pop();

      push();
      this.rotate(-branchAngle);
      line(0, 0, 0, radius / branchCount);
      pop();
    }
    pop();
  }

  draw() {
    push();
    translate(width / 2, height / 2);
    translate(this.x, this.y);
    rotate(this.angle);
    for (let i = 0; i < 6; ++i) {
      rotate(PI / 3);
      this.piece();
    }
    pop();
  }

  update() {
    this.y += height * 0.01;
    this.x += (noise((time / 4) + this.number) - 0.5) * width * 0.01;
    if (this.y > height / 2) {
      if (random() < 2) {
        this.y = -height / 2;
        this.x = random(-width / 2, width / 2);
      } else {
        this.y = (mouseY - height / 2);
        this.x = mouseX - width / 2;
      }
    }
  }

}

class Snowflake2 extends Snowflake {

  piece() {
    const radius = this.radius;
    const lineSize1 = radius * 3 / 6;
    const vexSize = radius * 2 / 6;
    const lineSize2 = radius * 1 / 6;
    strokeWeight(1 + radius / 50);
    stroke(this.mainColor);
    noFill();
    line(0, 0, 0, lineSize1);


    push();
    translate(0, radius / 6);
    rotate(PI / 3);
    line(0, 0, 0, radius / 5);
    rotate(-2 * PI / 3);
    line(0, 0, 0, radius / 5);
    pop();

    push();
    translate(0, radius * 2 / 6);
    rotate(PI / 3);
    line(0, 0, 0, radius / 2);
    rotate(-2 * PI / 3);
    line(0, 0, 0, radius / 2);
    pop();

    push();
    translate(0, lineSize1);
    beginShape();
    vertex(0, 0);
    vertex(-vexSize / 4, vexSize / 2);
    vertex(0, vexSize);
    vertex(vexSize / 4, vexSize / 2);
    endShape(CLOSE);
    translate(0, vexSize);
    line(0, 0, 0, lineSize2);
    pop();
  }
}

class Snowflake3 extends Snowflake {

  piece() {
    const radius = this.radius;
    strokeWeight(1 + radius / 200);
    stroke(this.mainColor);
    var color2 = color(this.mainColor);
    color2.alpha = color2.alpha / 2;
    fill(color2);
    beginShape();
    vertex(0, 0);
    vertex(sin(-PI / 6) * radius * 2 / 4, cos(-PI / 6) * radius * 2 / 4);
    vertex(sin(-PI / 10) * radius * 1.2 / 4, cos(-PI / 10) * radius * 1.2 / 4);
    vertex(0, radius * 3 / 4);
    vertex(0, 0);
    vertex(0, radius * 3 / 4);
    vertex(sin(PI / 10) * radius * 1.2 / 4, cos(PI / 10) * radius * 1.2 / 4);
    vertex(sin(PI / 6) * radius * 2 / 4, cos(PI / 6) * radius * 2 / 4);
    endShape();

    beginShape();
    vertex(0, radius * 3 / 4);
    vertex(radius * 1 / 16, radius * 7 / 8);
    vertex(0, radius);
    vertex(-radius * 1 / 16, radius * 7 / 8);
    endShape(CLOSE);

  }
}


var snow = new Snow();

function setup() {
  // techpark_logo_img = loadImage("logo02.png");
  createCanvas(windowWidth, windowHeight);
  background(7, 12, 56);
  ellipseMode(RADIUS);
  blendMode(ADD);
  snow.setup();
  rectMode(CENTER);
  noLoop();
}



function draw() {
  clear();
  // background(7, 12, 56);
  // 背景色
  background(108, 39, 53);
  gradient();
  snow.draw();
}

function gradient() {
  const count = width / 2 + 20;
  noFill();
  push();
  translate(width / 2, height * 2.5 / 4);
  for (let i = 0; i < count; i++) {
    var r = i;
    var a = 255 * sqrt(1 - i / count);
    stroke(20, 125, 150, a);
    ellipse(0, 0, r, r);
  }
  pop();
}
