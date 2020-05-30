let x;
let y;
const R = 10; // ハートの大きさ
let rc = 0; // グラデーションの色
let flg = true;

function setup() {
  createCanvas(540, 540);
  background(255);
  noFill();
}

function draw() {
  background(255);
  let i = rc;

  //ハート
  noStroke();
  fill(255, i, i);

  push();
  translate(width / 2, height / 2);

  beginShape();
  for (let theta = 0; theta < 360; theta++) {
    x = R * (16 * sin(radians(theta)) * sin(radians(theta)) * sin(radians(theta)));
    y = (-1) * R * (13 * cos(radians(theta)) - 5 * cos(radians(2 * theta)) - 2 * cos(radians(3 * theta)) - cos(radians(4 * theta)));

    vertex(x, y);
  }
  endShape(CLOSE);

  pop();

  if (rc == 240) {
    flg = false;
  } else if (rc == 0) {
    flg = true;
  }
  if (flg) {
    rc = rc + 1;
  } else {
    rc = rc - 1;
  }

}
