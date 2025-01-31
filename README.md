# workshop_9

website:  https://siennabienna.github.io/workshop_9/

# Things I looked at in this Workshop
- Learned to add a webcam to a sketch
- Experiemented with using objects to form images from the webcam
- Manipulating the webcam images at the level of the pixel
- adding RGB sliders to make it interactive and change the hue of the pixels

# Learning to add a Webcam to a Sketch

I started by following along with the workshop video and created a simple code that would allow me to add a webcam.


```js
function setup() { 
  createCanvas (400, 400); 
  pixelDensity(1); 
  webcam = createCapture(VIDEO); 
  webcam.size(width/scale, height/scale);
```

The webcam functions similarly to an image, so it wasn't too hard to get the hang of. I continued to follow along with the workshop video and learned to 'paint' the webcam video with objects. In my code, I used circles, but I also experimented with squares to see how this looked. I wanted to use stars to try and make the video, but I couldn't find a suitable code online for this. I am unconfortable using AI, so I just opted for circles. I was very happy with how this turned out. I also followed the suggestion to set the scale of the pixels lower so that it can run a bit smoother.

```js
function setup() {
  createCanvas(400, 400);
  pixelDensity(1); 
  webcam createCapture(VIDEO);
  webcam.size(400, 400);
  webcam.hide();
  for (x = 0; x < 80; x++) {
    rx = random(15, width - 15);
    ry = random(15, height - 15);
    rr = random(10, 50);
    ballSystem[x] = new Ball(rx, ry, rr);
  }
}
```
This allowed me to update the objects every frame to create the illusion of 'painting' the webcam video.

![image](https://github.com/user-attachments/assets/5acd6613-191b-4821-88cf-8e604a39a92b)

# Putting this into a Sketch

I wanted to make a proper sketch with this code, so I had the idea to make it look like it's on an old MS Paint window as a reference to early computer culture. I also decided that I wanted to let the user change the RGB of the pixels, and I felt that this would tie in well.

I found this image online:

![image](https://github.com/user-attachments/assets/9613576d-464d-4f54-a505-746bb1300f5c)

I then adjusted the webcam so that it was sitting ontop of the frame. 
```js
let paintX = 60, painty = 40;
let paintWidth = 375, paintHeight = 300;
```
I was very happy with this effect. After this, I was ready to make the RGB sliders. I just made 3 simple sliders that would allow the user to change each value individually, from 0 to 255. 

```js
 show() {
    let px = this.x / scale;
    let py = this.y / scale;
    let webcamColour = webcam.get(px, py);
    fill(webcamColour[0] + redSlider.value(), webcamColour[1] + greenSlider.value(), webcamColour[2] + blueSlider.value(), 100);
    noStroke();
    rect(this.x, this.y, this.r, this.r, 5);
```
# Ideas for further Development
- create more interactive user inputs that would allow for shapes to be drawn over top of the webcam, perhaps draw smiley faces in the corners or some sort of facial filter (like the Snapchat dog fliter) over the webcam
- Create a single slider that would change the hex rather than the RGB
- change the shape of the objects to something a little more fun, like perhaps draw some kind of brush-stroke shape that would allow for more of a painted effect
- Make it so that it reacts to just movement - perhaps the RGB changes from dark to light the more that the user moves around

# Overall Reflection of the Workshop Tasks Assignment

I found this assignment to be incredibly fun, challenging, and I felt that I learned so much from it. Dispite already having some coding experience, I really enjoyed the concept of using code to create art, which I had not really done before. I loved being able to have a bit of fun with the code, and bring a sence of humor to my sketches. My favourite sketches would have to be the Mouse Clock and the Bedbug code. Excited to see what I am able to create next!

