let webcam; 
let ballSystem = []; 
let scale = 18;

let redSlider;
let greenSlider;
let blueSlider;

let oldPaint;

function preload() {
  oldPaint = loadImage("paintBoarder.jpg")
}

let paintX = 60, painty = 40;
let paintWidth = 375, paintHeight = 300;

function setup() { 
  createCanvas (400, 400); 
  pixelDensity(1); 
  webcam = createCapture(VIDEO); 
  webcam.size(width/scale, height/scale); 
  webcam.hide(); 
  for (x = 0; x < 200; x++){ 
    rx = random(paintX + 15, paintWidth - 15); 
    ry = random(painty + 15, paintHeight - 15); 
    rr = random(4, 10); 
    ballSystem[x] = new Ball(rx, ry, rr); 
  } 

  redSlider = createSlider(0, 255);
  greenSlider = createSlider(0, 255);
  blueSlider = createSlider(0, 255);
  image(oldPaint, 0, 0, 400, 400); 
} 

function draw() { 
  // filter(GRAY); 
  webcam.loadPixels();
  for (x = 0; x < ballSystem.length; x++){ 
    ballSystem[x].move(); 
    ballSystem[x].show(); 
    ballSystem[x].checkEdges();
  }
}

class Ball { 
  constructor(x, y, r){ 
    this.x = x; 
    this.y = y; 
    this.r = r; 
  } 

  move() { 
   this.x = this.x + random (-8, 8); 
   this.y = this.y + random (-8, 8); 
  } 

  show(){ 
    let px = this.x/scale;
    let py = this.y/scale;
    let webcamColour = webcam.get(px, py);
    fill(webcamColour[0] + redSlider.value(), webcamColour[1] + greenSlider.value(), webcamColour[2] + blueSlider.value(), 100);
    noStroke(); 
    rect(this.x, this.y, this.r, this.r, 5);
  }

  checkEdges(){
    if(this.x < paintX + 15){
      this.x = paintX + 15;
    } else if (this.x > paintWidth - 15){
      this.x = paintWidth - 15;
    }
    if(this.y < painty + 15){
      this.y = painty + 15;
    } else if (this.y > paintHeight - 15){
      this.y = paintHeight - 15;
    }
  }

  
}
