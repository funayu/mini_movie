import java.util.Arrays;

// キャンバスのサイズ縦
int w = 400;
// キャンバスのサイズ横
int h = 265;
int n = 5;
ArrayList<ArrayList<Float>> snows = new ArrayList<ArrayList<Float>>();
int[] integrations = new int[w/4];
float v = 0.5;
PImage img;
boolean doDraw = true;

void setup(){
  // キャンバスのサイズを指定、変数指定できないので直書き
  //size(w,h);
  size(400,265);
  img = loadImage("castle.png");
  for(int i =0;i<50;i++){
    //ArrayList<Float> list = Arrays.asList(random(w), random(h),random(3,10));
    ArrayList<Float> list = new ArrayList<Float>();
    list.add(random(w));
    list.add(random(h));
    list.add(random(3,10));
    //snows.add(Arrays.asList(random(w), random(h),random(3,10)));
    snows.add(list);
  }

  for(int j=0;j<integrations.length;j++){
    integrations[j] = 0;
  }
}

void draw(){
  image(img,0,0);
  noStroke();
  for(int j = 0;j<snows.size();j++){
    drawLight(snows.get(j));
    float snow = snows.get(j).get(1);
    snow += v;
    snows.get(j).set(1,snow);
  }

  drawIntegrate();
  int index = int(random(w/4));

  if(doDraw){
  integrations[index] = integrations[index] + 1;
  }

  doDraw = !doDraw;
}

void drawLight(ArrayList<Float> snow){
  for(int i=0;i<n;i++){
    fill(255, 255/n);
    float snow1 = snow.get(0);
    float snow2 = (snow.get(1)) % h;
    float snow3 = (snow.get(2)/n) * (n - i);
    ellipse(snow1,snow2, snow3,snow3);
  }
}

void drawIntegrate(){
  for(int j=0;j<integrations.length; j++){
    fill(255, 200);
    ellipse(j * 4, h, integrations[j] * 4, integrations[j] * 2);
  }
}
