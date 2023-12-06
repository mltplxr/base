let id = Math.floor(Math.random() * 1000000);
let img;
let manuscriptCanvas;

function preload() {
  img = loadImage("holo.png");
}

function setup() {
  
  createCanvas(300, 500);
  manuscriptCanvas = createGraphics(width, height);
  
  background(255);
  textFont('monospace');
  textSize(80);
  fill(random(100, 200));
  text(id, 0, 65);

    // Rotate and display smaller ID at the top
  push();
  translate(width, 0);
  rotate(HALF_PI);
  textSize(10);
  fill(random(100, 200));
  text(id, 8, 10);
  pop();
  
  strokeWeight(0.1);
  noFill();
  drawRandomGradient();
  
  drawManuscript();
}

function drawRandomGradient() {
  for (let i = 0; i <= height; i++) {
    let shade = random(0, 10);
    stroke(shade);
    line(0, i, width, i);
  }
}

function drawManuscript() {
  manuscriptCanvas.textFont('monospace');
  manuscriptCanvas.textSize(10);
  manuscriptCanvas.fill(0); // Manuscript color
  for (let i = 0; i < 100; i += 10) {
    manuscriptCanvas.text("CONSENSUS ALONE CONFERS VALUE", 10, i + 40);
  }
}

function draw() {
  for (let i = 0; i < height; i += 1.1) {
    beginShape();
    for (let j = 0; j < width; j += 1.5) {
      let noiseVal = noise(j / 200, i / 50);
      vertex(j, i + noiseVal * 100);
    }
    endShape();
  }
  image(img, 10, 480, 380, 20);      image(manuscriptCanvas, 10, 360);
}


// save png
  function keyTyped() {
  if (key === 's') {
    saveCanvas('###', 'png');
  }
  }
