// 参考サイト
// https://qiita.com/k-takizawa/items/e5404c4b00f8949ede6d

// ここで木の形を変更
// 110だとツリー風
int angle = 110;

void setup(){
  background(255);
  size(600, 600, P2D);

  tree(300, 600, 0.0, radians(0), radians(angle),200,10);
  tree(300, 600, 0.0, radians(angle), radians(0),200,10);

}

void tree(float posX, float posY, float angle, float forkRight, float forkLeft,float length, int counter){
  if(counter == 0){
    return;
  }

  float nextX = posX + length * sin(angle);
  float nextY = posY - length * cos(angle);

  // 線の色
  stroke(0,124,69);

  line(posX, posY, nextX, nextY);

  tree(nextX,nextY,angle + forkRight, forkRight, forkLeft, length*0.6, counter -1);
  tree(nextX, nextY, angle - forkLeft, forkRight, forkLeft, length*0.6,counter -1);
}
