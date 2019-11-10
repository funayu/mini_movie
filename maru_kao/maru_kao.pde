float r = random(254);
float g = random(254);
float b = random(254);

void setup(){
  size(300, 300);
  colorMode(RGB, 100);
}

void draw() {
// ランダムな色を生成
  background(100);

  // 輪郭
  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, 100, 100);

  // 目と口
  fill(0);
  ellipse(mouseX-20,mouseY-5,10,10);
  ellipse(mouseX+20,mouseY-5,10,10);
  ellipse(mouseX, mouseY + 20, 13, 20);
}

void mousePressed(){
  r = random(254);
  g = random(254);
  b = random(254);
}
