let id = Math.floor(Math.random() * 1000000);
let img;


function setup() {
  createCanvas(300, 500);
  drawRandomGradient() ;
  textFont('monospace');
  textSize(100);
  //fill(random(255), random(255), random(255)); // Set random fill color
  //fill(random(150, 255), 0, random(150, 255)); // Blue and pink hues for text
  fill(0, random(150, 255), random(150, 255)); // Mint hues for text
  text(id, 0, 100);
  strokeWeight(0.1);
  noFill();
  
}

function drawRandomGradient() {
  //let c1 = color(random(255), random(255), random(255));
 // let c2 = color(random(255), random(255), random(255));
  
  //let c1 = color(random(150, 255), 0, random(150, 255)); // Blue and pink hues
 // let c2 = color(random(150, 255), 0, random(150, 255));
  
   let c1 = color(0, random(150, 255), random(150, 255), random(150, 255)); // Mint hues
  let c2 = color(0, random(150, 255), random(150, 255), random(150, 255));


  // You can customize the gradient style here
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
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

 // image(img, 100, 100, 100, 100);
}


// save png
  function keyTyped() {
  if (key === 's') {
    saveCanvas('###', 'png');
  }
  }



