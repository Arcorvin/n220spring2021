var myPadd = {
    s: 40,
    s2: 120,
    x1: 550,
    }

var myBall = {
    radius: 40,
    x2: 110,
    sped: 0.5,
    dir: 1,
}
var x = 40;
var y = 40;


function setup(){
    createCanvas(600, 600)
    noStroke();
}

function draw(){
    background(0);
    fill(255);
    rect(myPadd.x1, mouseY, myPadd.s, myPadd.s2);

    /*x+= random(-myBall.sped*5, myBall.sped*5);
    y += random(-myBall.sped*2, myBall.sped*5);
    circle(x,y,myPadd.s)*/


    /*myBall.x += myBall.sped*myBall.dir;
    if((myBall.x>myBall.width-myBall.radius) || (myBall.x < myBall.radius)){
        myBall.dir = - myBall.dir;
    }
    if(myBall.dir == 1){
        arc(myBall.x,60, myBall.radius, myBall.radius, 0.52, 5.76);
    }else{
        arc(myBall.x,60,myBall.radius,myBall.radius,3.67, 8.7);
    }*/
}