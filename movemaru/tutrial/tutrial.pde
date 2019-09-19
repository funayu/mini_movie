void setup() {
  size(960, 540);
  noStroke();
}

void draw() {
  background(0, frameCount % 256, frameCount % 256);
  ellipse(width/2, height/2, frameCount % 256, frameCount % 256);
  ellipse(width/4, height/2, frameCount % 256, frameCount % 256);
  ellipse(width/8, height/2, frameCount % 1000, frameCount % 1000);
  ellipse(width/2, height/8, frameCount % 500, frameCount % 500);
}
