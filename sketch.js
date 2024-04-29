function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
capture.size(320,240);//設定顯示畫面大小
image(capture,mouseX, mouseY)
}

function draw() {
  background(220);
}
