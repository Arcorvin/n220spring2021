





function myCircle(){
    var dia = 25;
    for(var i = 0; i < 10; i++){
    circle(mouseX, mouseY, dia);
    scale(dia%.9)
}
}

/**/

/*this will be for the basic set up of the program i.e. backgrounds and canvas size*/
function setup(){
    createCanvas(900,900);
    x = width/2;
}

function draw(){
    background(0);
    myCircle();

    for(var i= 0; i<900;i++){
        fill(190)
    }
    
}

