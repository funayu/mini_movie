float x;
float y;
int R = 10; // ハートの大きさ
int rc = 0; // グラデーションの色
boolean flg = true;

void setup() {
  size(540, 540);
  background(255);
  noFill();
}

void draw() {
  background(255);
  int i = rc;

  //ハート
  noStroke();
  fill(255, i, i);

  pushMatrix();
  translate(width/2, height/2);

  beginShape();
  for (int theta=0; theta<360; theta++) {
    x = R * (16 * sin(radians(theta)) * sin(radians(theta)) * sin(radians(theta)));
    y = (-1) * R * (13 *cos(radians(theta)) - 5 * cos(radians(2 * theta)) -2 * cos(radians(3 * theta)) - cos(radians(4 * theta)));

    vertex(x, y);
  }
  endShape(CLOSE);

  popMatrix();

  if(rc == 240) {
    flg = false;
  } else if (rc == 0){
    delay(1200);  // 一番濃い色の時に1秒停止
    flg = true;
  }
  if(flg){
    rc = rc + 1;
  } else {
    rc = rc - 1;
  }

}