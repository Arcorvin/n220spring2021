let xPos = 0;
let yPos = 40;

let xSpeed = 40;
let ySpeed = 0;


function setup(){
    createCanvas(800, 600);
    strokeWeight(1);
    frameRate(5);
}

function draw(){
    


    background(0);

    xPos = xPos + xSpeed;

    yPos = yPos + ySpeed;

    if (xPos == 800) {
        xPos = 0;
        r = random(255);
        g = random(1,200);
        b = random(1,200);
        fill(r,g,b);
      } 

    circle(xPos,yPos, 30);

}