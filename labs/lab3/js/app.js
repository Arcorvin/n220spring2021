function setup(){
    createCanvas(1920, 500);
}

function draw(){
     for (var i = 0; i < 25; i+=1){
        /*
        fill(0);*/

        if(i % 3 == 0 && i % 5 ==0){
            fill(40,75,173);
            rect(abs(i-5.62)*110, 20,40,40);
        }
        else if(i % 5 == 0){
            fill(40,173,64);
            rect((abs(i%100)*40.4)+15,20,40,40);
        }
        else if (i % 3 == 0){
            fill(96,40,173);
            ellipse((i+1)*40, 40, 40, 40);
        }
        else{
            fill(0);
            ellipse((i+1)*40, 40, 40, 40);
        }

    }
    
    
}