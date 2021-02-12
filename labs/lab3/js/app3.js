function setup(){
    createCanvas(1920,1080);
}

function draw(){
fill(255,0,0);
stroke(255);
        for( var y = 1; y <= 4; y++){
            for(var x = 1; x <= y; x++){
              square(x*25,y*25,25);  
            }

        }
}