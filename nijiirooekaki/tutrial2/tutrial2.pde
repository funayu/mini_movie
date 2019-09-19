int hue = 0;
void setup() {
  size(960, 540);
  background(255);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

void draw() {
  hue = (hue + 10) % 361;
  fill(hue, 80, 60, 25);
  ellipse(mouseX, mouseY, 60, 60);
}
