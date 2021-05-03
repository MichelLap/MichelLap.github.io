let x = 0;

function setup() {
  background(100);  
}

function draw() {
  ellipse(x, height/2, 20, 20);
  if (x == (width + 10)) {
    x = 0;
  } else {
    x = x + 1;
  }
}
