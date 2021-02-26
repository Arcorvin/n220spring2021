let col = ["#32a852","#3832a8", "#a832a6", "#a83232" ];

function setup(){
    createCanvas(400,400);
    
}

function draw(){
    background(100);
    strokeWeight(2);
    cir();
}

function cir(){
circle(200,200,50);
}

function mousePressed(){
    let inner = dist(mouseX, mouseY, 200,200);
    if(inner <= 50 ){
        fill(random(col))
    }
}
