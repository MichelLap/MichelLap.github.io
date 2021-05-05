function setup() {
  let w = width;
  let h = height
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 200);
  text("width before Canvas: "+w+" / "+h,10,30);
  text("width after Canvas: "+width+" / "+height,10,50);
  text("displayWidth: "+displayWidth+" / "+displayHeight,10,70);
  text("windowWidth: "+windowWidth+" / "+windowHeight,10,90);
  text("pixelDensity/displayDensity: "+pixelDensity()+" / "+displayDensity(),10,110);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
