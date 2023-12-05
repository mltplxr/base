let id = Math.floor(Math.random() * 1000000);
let img;
let manuscriptCanvas;

function preload() {
  img = loadImage("holo.png");
}

function setup() {
  createCanvas(400, 700);
  manuscriptCanvas = createGraphics(width, height);
  
  background(255);
  textFont('monospace');
  textSize(100);
  fill(random(100, 200));
  text(id, 20, 100);

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
  for (let i = 0; i < 500; i += 20) {
    manuscriptCanvas.text("CONSENSUS ALONE CONFERS VALUE", 10, i + 500);
  }
}

function draw() {
  for (let i = 0; i < height; i += 1) {
    beginShape();
    for (let j = 0; j < width; j += 1.8) {
      let noiseVal = noise(j / 200, i / 40);
      vertex(j, i + noiseVal * 100);
    }
    endShape();
  }
  image(img, 20, 680, 480, 20);
  image(manuscriptCanvas, 30, 10);
}


// save png
  function keyTyped() {
  if (key === 's') {
    saveCanvas('###', 'png');
  }
  }



