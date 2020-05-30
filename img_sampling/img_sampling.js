// 参考
// http://www.joshibi.net/prof/ryodebuchi/Source/sample8/applet/sample8.html
// loadPixelsを書かないとピクセルデータを取れない
// サンプリングするインデックスが整数じゃなかったのでMath.floorして小数点以下切り捨てた
// グレースケールになったのはfillの引数に1つしか指定していなかったのが原因、fillにrgbaを指定する必要があるとわかったので、pixcel配列の仕様を調べて[1r,1g,1b,1a,2r,2g・・・]という形式で情報が入っていたので、それぞれr,g,b,aという変数に格納してfill()の引数に指定したら解決
// サンプリングの場所がずれていたのが、次のサンプリング位置を取得するときに4つずれないといけないのに1つしかずれていなかったのが原因だったので、4つずれるように修正

// 横分割数
const DX = 30;
// // 縦分割数
const DY = 30;
// // ドットの半径
const R = 10;
// 画像イメージ
let img;

function preload() {
  // 画像ファイル読み込み
  img = loadImage("jenkins-x.png");
}

function setup() {
  // 読み込むキャンパスサイズ
  createCanvas(350, 350);
  // JPEGの色データ段階
  colorMode(RGB, 256);

  // ピクセルデータの読み込み
  img.loadPixels();

  // 画像サンプリングの幅を計算
  const PX = Math.floor(img.width / DX);
  // 画像サンプリングの高さを計算
  const PY = Math.floor(img.height / DY);
  // 画像グリッドの幅を計算
  const LX = Math.floor(width / DX);
  // 画像グリッドの高さを計算
  const LY = Math.floor(height / DY);

  for (let i = 0; i <= DX; i++) {
    for (let j = 0; j <= DY; j++) {
      // 画像データの位置を求める
      const pos = (j * PY * img.width + i * PX) * 4;
      // 画像データの色を取り出す
      const r = img.pixels[pos];
      const g = img.pixels[pos + 1];
      const b = img.pixels[pos + 2];
      const a = img.pixels[pos + 3];
      fill(r, g, b, a);
      // グリッドの位置に取り出した色で四角形を描く
      // ellipse(i * LX, j * LY, R, R);
      rect(i * LX, j * LY, R, R);
      ;
    }
  }

}
