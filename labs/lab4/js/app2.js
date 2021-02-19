let position = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let positions = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function setup(){
    createCanvas(1920,1080);
}

function draw(){

    background(0);
    position.push( mouseX);
    position.shift();
    positions.push( mouseY);
    positions.shift();
    
        

    for( var i = 0; i < position.length; i++){
       rect(mouseX, mouseY+25, 20,60) 
       rect(mouseX-10, mouseY, 40,40);
       rect(mouseX-20, mouseY+80, 60,80);
       rect(mouseX-10, mouseY+160, 20,60);
       rect(mouseX+10, mouseY+160, 20,60);
       rect(mouseX-20, mouseY+220, 30,10);
       rect(mouseX+10, mouseY+220, 30,10);
       translate(mouseX,mouseY)
       scale(positions[i] / 300.0)
       rotate(positions[i]*5/40)

       if(mouseX >= 500){
           fill(255,0,0)
       }

      else if(mouseX <= 500){
           fill(199,80,191);
       }
    }
}