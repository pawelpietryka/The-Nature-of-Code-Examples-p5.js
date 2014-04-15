// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-5: Vector magnitude

function setup() {
  createCanvas(640,360);
};

function draw() {
  background(51);
  
  var mouse = new PVector(mouseX,mouseY);
  var center = new PVector(width/2,height/2);
  mouse.sub(center);

  var m = mouse.mag();
  fill(255);
  noStroke();
  rect(0,0,m,10);
  
  translate(width/2,height/2);
  strokeWeight(2);
  stroke(255);
  line(0,0,mouse.x,mouse.y);
};

