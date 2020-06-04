// スマイリーの色
let r;
let g;
let b;

// クリックしたかどうか
let isClick = false;

function setup() {
  createCanvas(1000, 1000);
  colorMode(RGB, 100);

  setRandomColor();
}

// ループ処理
function draw() {
  // 背景
  background(100);

  // スマイリーの描画処理
  // クリックされるまで描画しない
  if (isClick) {
    // 輪郭
    noStroke();
    fill(r, g, b);
    ellipse(mouseX, mouseY, 100, 100);

    // 目と口
    fill(0);
    ellipse(mouseX - 20, mouseY - 5, 10, 10);
    ellipse(mouseX + 20, mouseY - 5, 10, 10);
    ellipse(mouseX, mouseY + 20, 13, 20);
  }
}

// クリックする度に色を変える
function mousePressed() {
  setRandomColor();

  isClick = true;
}

function setRandomColor() {
  r = Math.floor(random(254));
  g = Math.floor(random(254));
  b = Math.floor(random(254));

  if (r >= 240 && g >= 240 && b >= 240) {
    setRandomColor();
  }
}
