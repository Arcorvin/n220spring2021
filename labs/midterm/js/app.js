




/* code for making the 10 circles appear and changing of sizes*/
function myCircle(){
    var dia = 25;
    for(var i = 0; i < 10; i++){
    circle(mouseX, mouseY, dia);
    scale(dia%.9) /* changes the size of the circles*/
}
}

/**/

/*this will be for the basic set up of the program i.e. backgrounds and canvas size*/
function setup(){
    createCanvas(900,900);
}

function draw(){
    background(0);
    myCircle(); /*allows the fuction of myCircle to be drawn*/

    /*code for chaging the color*/
    for(var i= 0; i<900;i++){
        fill(190)
    }
    
}

