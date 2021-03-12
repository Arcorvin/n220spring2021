var myRect = {
    s: 80,
    x: 200,
    y: 200,
    color: [0,255,13],
    update: function(){
        fill(this.color);
        rect(this.x, this.y, this.s, this.s);
    }
}

function setup(){
    createCanvas(400,400);
}

function draw(){
    myRect.update();
}