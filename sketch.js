// JavaScript Document

// via 
// https://www.w3resource.com/html5-canvas/html5-canvas-gradients-patterns.php
// https://www.openprocessing.org/sketch/857874
// https://www.openprocessing.org/sketch/942270
let slider;
let palette = ["#10111C", "#23AECC", "#ECE1B4", "#CC3016", "#F2C96E", "#178FA6"];

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0.0, 1.0, 0.1, 0);
  slider.position(10, 10);
  slider.style('width', '100px');
  slider.class("mySlider");
  slider.style('opacity', 1);
  // see reference for more details
  // https://p5js.org/reference/#/p5.Element
  slider.changed(updateSliderEvent);
}

function draw() {
  background(100);
  let c1 = color(200, 255, 200);
  let c2 = color(200, 200, 255);
  let c3 = color(0, 0, 255);
  let w = 10;
  let h = 100;

  drawingContext.shadowColor = color(0, 0, 0, 50);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowOffsetY = h / 2;
  drawingContext.shadowOffsetX = 0;
  let h1 = frameCount % h * 2;
  let gradient = drawingContext.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0.0, c1);
  gradient.addColorStop(0.5, c2);
  gradient.addColorStop(1.0, c3);
  drawingContext.fillStyle = gradient;

  randomSeed(0);
  let num = 100;
  let spacing = 10;
  let off = slider.value() * num * spacing;

  noStroke();
  push();
  translate(100, 200);
  translate(-off, 0);
  push();
  scale(1, -1); // flip vertically
  for (let j = 0; j < 2; j++) {
    push();
    fill(color(random(palette)),120);
    for (let i = 0; i < num; i++) {
      let h2 = random(0, h);
      beginShape();
      vertex(0, 0);
      vertex(w, 0);
      vertex(w, h2);
      vertex(0, h2);
      endShape();
      translate(spacing, 0);
    }
    pop();
    translate(4,-4);
  }
  pop();

  pop();

  push();
  translate(70, 200 + (frameCount * 0.5) % 100);
  scale(map(frameCount % 100, 0, 100, 0.1, 20), 1);
  beginShape();
  vertex(0, 0);
  vertex(w, 0);
  vertex(w, h);
  vertex(0, h);
  endShape();
  pop();
}

function updateSliderEvent(theEvent) {
  console.log("slider-event", slider.value());
}
