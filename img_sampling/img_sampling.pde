// 参考
// http://www.joshibi.net/prof/ryodebuchi/Source/sample8/applet/sample8.html

// 横分割数
int DX = 30;
// // 縦分割数
int DY = 30;
// // ドットの半径
int R = 10;

size(350,350);
// JPEGの色データ段階
colorMode(RGB, 256);
// 画像ファイル読み込み
PImage img = loadImage("jenkins-x.png");

// 画像サンプリングの幅を計算
int PX = img.width / DX;
// 画像サンプリングの高さを計算
int PY = img.height / DY;
// 画像グリッドの幅を計算
int LX = width / DX;
// 画像グリッドの高さを計算
int LY = height / DY;

for(int i = 0; i <= DX; i++){
  for(int j = 0; j <= DY ; j++){
    // 画像データの位置を求める
    int pos = j * PY * img.width + i * PX;
    // 画像データの色を取り出す
    color c = img.pixels[pos];
    fill(c);
    // グリッドの位置に取り出した色で四角形を描く
    // ellipse(i * LX, j * LY, R, R);
    rect(i * LX, j * LY, R, R);
;  }
}
