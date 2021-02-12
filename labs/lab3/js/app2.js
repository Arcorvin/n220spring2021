function setup(){
    createCanvas(1920,1080);
}

function draw(){

    background(220);

    noFill();

    for( var i = 0; i < 30; i++){
        circle(350,550, i*10);
        stroke(random(255), random(110), random(180));
        
    }

    for( var i = 0; i < 50; i++){
        circle(1250,550, i*10);
        stroke(0);  
    }
    
}