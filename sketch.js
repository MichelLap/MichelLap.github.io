let x = 0;

function setup() {
  background(100);  
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
}

function draw() {
  ellipse(x, height/2, 20, 20);
  if (x == (width + 10)) {
    x = 0;
  } else {
    x = x + 1;
  }
}
