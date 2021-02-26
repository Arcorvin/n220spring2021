/*variables for the array and functions*/

let col = ["#32a852","#3832a8", "#a832a6", "#a83232" ];

    var angle = 0.0;
    var offset = 60;
    var scalar = 2;
    var speed = 5;

function setup(){
    createCanvas(800,800);
    spirl();
}

function draw(){
    
    strokeWeight(2);
    cir();
    
}
/*button*/
function cir(){
circle(400,400,50);
}
/*to make a pattern of dots with random colors*/
function dots(){
    for(var y = 32; y <= height; y +=8){
        for(var x = 12; x <= width; x+=15){
            ellipse(x+y, y, 16 - y/10.0, 16 - y/10.0)
            fill(random(255),random(255),random(255))
        }
    }
}
/*to make a pattern of dots with random colors but in the opposite ways and with random spawns*/
function dot(){
    for(var y = random(12); y <= height; y +=15){
        for(var x = random(32); x <= width; x+=8){
            ellipse(random(x-y), y, 16 - y/10.0, 16 - y/10.0)
            fill(random(255),random(255),random(255))
        }
    }
}
/*for the spiral*/
function spirl(){
    

    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;

    ellipse(x+350, y+500, 10,10);

    angle += speed;

    scalar += speed;
}
/*what happens when pressed*/
function mousePressed(){
    let inner = dist(mouseX, mouseY, 400,400);
    if(inner <= 50 ){
        spirl();
        dot();
        dots();
        fill(random(col))
    }
}














