let id = Math.floor(Math.random() * 1000000);
let img;
let canvasOpacity = 50;

function preload() {
  img  = loadImage("holo.png");

}

function setup() {
  createCanvas(300, 500);
  background(255, canvasOpacity);
  // Display ID on canvas
  textSize(12);
  text(id, 10, 20);
  image(img, 0, 0, 300, 300);
  strokeWeight(0.1);
  noFill();
  
}

function draw() {


for (let i = 0; i < height; i += 1) {// manipulate topography

beginShape();

for (let j = 0; j < width; j += 1.8) {// manipulate topography
let noiseVal = noise(j/200, i/40); // 100, 100 > for smoothness 

vertex(j, i + noiseVal * 100); // 200 < for smoothness

}
    endShape();
  }

  image(img, 100, 100, 100, 100);
}
// save png
  function keyTyped() {
  if (key === 's') {
    saveCanvas('###', 'png');
  }
  }
