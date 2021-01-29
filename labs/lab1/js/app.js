var b = 180;

var n = 300;

var angle = 0.0;

var offset =60;

var scalar = 2;

var speed = 0.10;

var angle1 = 0.0;

var offset1 =60;

var scalar1 = 2;

var speed1 = 0.10;


function setup(){
    createCanvas(1920, 1080);
    strokeWeight(2);
    
    background(0);

    fill(255, 0, 0);

    stroke(255);
}

function draw(){

    
    
    rect(219,257,b,240);

    line(219,257,n,b);

    line(400,257,n,b);

    circle(n,130, 50);

    circle(n,130,25);

    circle(n,140,12);

    line(219,380,100,200);

    line(400,380,550,200);

    arc(100,200,50,25,110,90);

    arc(550,200,50,25,0,-115);

    rect(280,498,45,60);

    ellipse(n,590,220,60);

    circle(220,590,12);

    circle(260,590,12);

    circle(n,590,12);

    circle(340,590,12);

    circle(380,590,12);

    var x = offset + cos(angle) * scalar;

    var y = offset + sin(angle) * scalar;

    ellipse(x, y, 2, 2);

    angle += speed;

    scalar +=speed;

    var a = offset1 + cos(angle1) * scalar1;

    var s = offset1 + sin(angle1) * scalar1;

    ellipse(500+a, s, 2, 2);

    angle1 -= speed1;

    scalar1 -=speed1;




}