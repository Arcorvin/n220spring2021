function setup(){
    createCanvas(400, 300);
    noStroke();
    fill(186,7,136);
}

function draw(){
    ellipse(mouseX,mouseY,9,9);

    if(mouseX >= 200){
        fill(255,0,0);
    }
    else{
        fill(7,88,186);
    }

    
}