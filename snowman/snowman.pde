// 参考サイト
// https://qiita.com/k-takizawa/items/e5404c4b00f8949ede6d

size(300, 250);
background(255);
stroke(0);

fill(255);
// 体
ellipse(150,160,100,100);
// 左腕
line(110,130,70,100);
// 右腕
line(190,130,230,100);
// 頭
ellipse(150,100,60,60);
// 口
arc(150,106,30,25, -TWO_PI, -PI);

fill(0);
rectMode(CENTER);
// 帽子
rect(150,65,34,20);
// 鍔
line(125,75,175,75);
// 左目
ellipse(142,92,5,5);
// 右目
ellipse(158,92,5,5);

noStroke();
fill(255,100,0);
// 鼻
ellipse(150,102,7,7);
