function setup() {
  createCanvas(401, 401);
}
let x=0;
function draw() {
  if (x<401) {
    background(255);
    circle(200, 200, x);
    x += 1;
  } 
}
