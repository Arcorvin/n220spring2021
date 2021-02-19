let position = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let positions = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
        circle(position[i], positions[i], 20);
        rect(position[i]*.75, positions[i]*.75, 40,40);
        frameRate(10);
        fill(random(255), random(110), random(180));
    }
}
