let w:
let h:

function setup() {
  w = width;
  h = height;
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 100, 200);
  //fill(120);
  //rect(20,20,200,200);
  //stroke(0);
  //fill(0);
  text("width before Canvas: "+w+" / "+h,40,40);
  text("width after Canvas: "+width+" / "+height,40,60);
  text("displayWidth: "+displayWidth+" / "+displayHeight,40,80);
  text("windowWidth: "+windowWidth+" / "+windowHeight,40,100);
  text("pixelDensity/displayDensity: "+pixelDensity()+" / "+displayDensity(),10,110);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
