var myHyp = {
 angle: 0.0,
 offset: 40,
 scalar: 20,
 speed: 0.1,
}

var myCirc = {
    r: 40,
    x:540,
    y:440,
    update: function(){
        this.x +=0.05
        circle(this.x, this.y, this.r)
    }
}

var myRec = {
    l: 60,
    w: 30,
    x:525,
    y:480,
    update: function(){
        this.x +=0.05
        rect(this.x, this.y, this.w, this.l)
    }
}

var myRect = {
    l: 120,
    w: 80,
    x:500,
    y:520,
    update: function(){
        this.x +=0.05
        rect(this.x, this.y, this.w, this.l)
    }
}

var myRect2 = {
    l: 20,
    w: 50,
    x:480,
    y:710,
    update: function(){
        this.x +=0.05
        rect(this.x, this.y, this.w, this.l)
    }
}

var myRect3 = {
    l: 20,
    w: 50,
    x:550,
    y:710,
    update: function(){
        this.x +=0.05
        rect(this.x, this.y, this.w, this.l)
    }
}

var myRect4 = {
    l: 80,
    w: 30,
    x:550,
    y:640,
    update: function(){
        this.x +=0.05
        rect(this.x, this.y, this.w, this.l)
    }
}

var myRect5 = {
    l: 80,
    w: 30,
    x:500,
    y:640,
    update: function(){
        this.x +=0.05
        rect(this.x, this.y, this.w, this.l)
    }
}




function setup(){
    createCanvas(1920,1080);
    background(0);
}

function draw(){
    myRec.update();
    myCirc.update();
    myRect.update();
    myRect5.update();
    myRect4.update();
    myRect2.update();
    myRect3.update();

    var x = myHyp.offset + cos(myHyp.angle) * myHyp.scalar;
    var y = myHyp.offset + sin(myHyp.angle) * myHyp.scalar;
    ellipse(x+500,y+400, 40,40)
    myHyp.angle += myHyp.speed;
    myHyp.scalar += myHyp.speed;
    r = random(255);
    g = random(1,200);
    b = random(1,200);
    stroke(r,g,b);
    
    
    
}