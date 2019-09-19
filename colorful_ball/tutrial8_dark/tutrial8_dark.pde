import gifAnimation.*;

GifMaker gifExport; // GifMakerオブジェクトの宣言

int numBalls = 120; // ボールの数
float[] x = new float[numBalls];
float[] y = new float[numBalls];
float[] vx = new float[numBalls];
float[] vy = new float[numBalls];
int[] radius = new int[numBalls];
color[] c = new color[numBalls];

void setup() {
  size(960, 540);
  
  for (int i=0; i<numBalls; i++){
    radius[i] = (int)random(10, 20);
    x[i] = random(radius[i], width-radius[i]);
    y[i] = random(radius[i], height-radius[i]);
    vx[i] = random(-6, 6);
    vy[i] = random(-6, 6);
    c[i] = color(random(255), random(255), random(255));

    frameRate(50); // 50fpsでアニメーションする

    // GIFアニメーションの設定
    gifExport = new GifMaker(this, "export.gif");
    gifExport.setRepeat(0); // エンドレス再生
    gifExport.setQuality(10); // クオリティ
    gifExport.setDelay(20); // アニメーションの間隔を20ms
  }

}

void draw() {
  background(0);

  for(int i=0; i<numBalls; i++) {
    // ボールの位置を更新
    x[i] += vx[i];
    y[i] += vy[i];
    // 左右の壁との当たり判定
    if(x[i]-radius[i] <= 0 || x[i]+radius[i] >= width) {
      vx[i] *= -1;
    }
    // 上下の壁との当たり判定
    if(y[i]-radius[i] <= 0 || y[i]+radius[i] >= height) {
      vy[i] *= -1;
    }
    // ボールを描画
    noStroke();
    fill(c[i]);
    ellipse(x[i], y[i], 2*radius[i], 2*radius[i]);
  }

  // gifアニメ出力用のコード
  // 50fps*3 つまり3秒間録画する
  if (frameCount <= 50*6) {
    gifExport.addFrame(); // フレームを追加
  } else {
    gifExport.finish(); // 終了してファイル保存
  }
}
