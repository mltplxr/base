let id = Math.floor(Math.random() * 1000000);
let img;

function preload() {
  img  = loadImage("holo.png");

}

function setup() {
  createCanvas(300, 500);
  textFont('monospace');
  textSize(100);
  //image(img, 0, 0, 300, 300);
  // Random grayscale for text
  fill(random(100, 255));
  text(id, 0, 100);

  strokeWeight(0.1);
  noFill();
  drawRandomGradient(); // Random grayscale for background
}

function drawRandomGradient() {
  for (let i = 0; i <= height; i++) {
    let shade = random(0, 255);
    stroke(shade);
    line(0, i, width, i);
    
  }
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

  image(img, 0, 470, 400, 2);
  
  
}


// save png
  function keyTyped() {
  if (key === 's') {
    saveCanvas('###', 'png');
  }
  }




