let col = ["#E8250c", "#FFFF", "#361F1F"]
function setup(){
    createCanvas(1920,1080);
}

function draw(){
    for (var i = 0; i <= col.length; i++){
        rect(500,500,100,200);
        fill(col[0]);
        rect(600,500,100,200);
        fill(col[1]);
        rect(700,500,100,200);
        fill(col[2]);

    }
}