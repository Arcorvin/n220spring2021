var myCirc = {
    r: 50,
    x: 100,
    y: 100,
}

function setup(){
    createCanvas(1920,1080);
}

function draw(){
    myCirc.x +=1;
    myCirc.y +=1;
    myCirc.r +=1;

    r = random(255);
    g = random(1,200);
    b = random(1,200);
    stroke(r,g,b);

    circle(myCirc.x, myCirc.y, myCirc.r);
}