// 参考サイト
// https://qiita.com/k-takizawa/items/e5404c4b00f8949ede6d

// ここで木の形を変更
// 110だとツリー風
const angle = 110;

function setup() {
  background(255);
  createCanvas(600, 600, P2D);

  tree(300, 600, 0.0, radians(0), radians(angle), 200, 10);
  tree(300, 600, 0.0, radians(angle), radians(0), 200, 10);

}

function tree(posX, posY, angle, forkRight, forkLeft, length, counter) {
  if (counter == 0) {
    return;
  }

  const nextX = posX + length * sin(angle);
  const nextY = posY - length * cos(angle);

  // 線の色
  stroke(0, 124, 69);
  strokeWeight(2);

  line(posX, posY, nextX, nextY);

  tree(nextX, nextY, angle + forkRight, forkRight, forkLeft, length * 0.6, counter - 1);
  tree(nextX, nextY, angle - forkLeft, forkRight, forkLeft, length * 0.6, counter - 1);
}
