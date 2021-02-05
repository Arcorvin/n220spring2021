var dia = 1;


function setup(){
    createCanvas(800, 800);

    strokeWeight(2);
}


function draw(){
    background(0);

    if(mouseIsPressed == true){
        frameRate(24);
    }
    else{
        frameRate(1);
    }

    if(dia <= 200){
        dia ++;
    }

    if(dia >= 200){
        dia =1;
    }

    circle(400,400, dia);
}