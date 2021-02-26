function setup(){
    createCanvas(800,800)
    x = drawCirc()/2
    y = drawCirc()/2
}

function drawCirc(mouseX,mouseY,size){
    circle(400,400,50)
    
}

function draw(){
drawCirc();
rul();
}

function rul(){
    if (mouseX > x || mouseY > y){
        drawCirc(mouseX+3,mouseY+3,50)

    }
}