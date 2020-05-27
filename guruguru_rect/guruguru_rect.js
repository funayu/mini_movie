// 色の段階数
const COLMAX = 256;
// 四角の個数
const N = 40;
// 四角の辺の長さ
const R = 200;

function setup() {
  // キャンバスのサイズ
  createCanvas(400, 400);
  // カラーモードをHSBに指定する
  colorMode(HSB, COLMAX);
  // 背景を白にする
  background(COLMAX);
  // 図形の枠線を無しにする
  noStroke();
  // 矩形の描画位置の座標を中心に設定する
  rectMode(CENTER);
  // 色の増分
  const co = COLMAX / N;
  // 回転の増分
  const angle = 360 * 2 / N;
  // 移動の増分
  const move = width / (3 * N);
  // 辺の長さの増分
  const dr = R / (N * 2);

  // 真ん中に持ってくる
  translate(width / 2, height / 2);
  for (let i = 0; i < N; i++) {
    // 座標をスタックに保存
    push();
    // 座標を回転する
    rotate(radians(i * angle));
    // 座標を移動する
    translate(i * move, 0);
    // 図形の色を設定する
    fill(i * co, COLMAX, COLMAX);
    // 矩形を描画する
    rect(0, 0, dr * i, dr * i);
    // 座標をスタックから取り出す
    pop();
  }
}

// function draw() {

// }
