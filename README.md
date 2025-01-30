# workshop_9


```js
let webcam; 
let ballSystem = []; 
let scale = 18;

function setup() { 
  createCanvas (400, 400); 
  pixelDensity(1); 
  webcam = createCapture(VIDEO); 
  webcam.size(width/scale, height/scale); 
  webcam.hide(); 
  for (x = 0; x < 200; x++){ 
    rx = random(15, width - 15); 
    ry = random(15, height - 15); 
    rr = random(4, 10); 
    ballSystem[x] = new Ball(rx, ry, rr); 
  } 
} 

function draw() { 
  // image(webcam, 0, 0); 
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
    let pixelColour = webcam.get(px, py);
    fill(pixelColour[0], pixelColour[1], pixelColour[2], 100);
    noStroke(); 
    ellipse(this.x, this.y, this.r);
  }

  checkEdges(){
    if(this.x < 15){
      this.x = 15;
    } else if (this.x > width - 15){
      this.x = width - 15;
    }
    if(this.y < 15){
      this.y = 15;
    } else if (this.y > height - 15){
      this.y = height - 15;
    }
  }

}
```
