var snake;
var scl=20;

function setup(){
    createCanvas(600,600);
    snake=new snake();
    frameRate(10);

}

function draw(){
    background (51);
    this.update();
    this.show();
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        s.dir(0,-1);
    }if(keyCode==DOWN_ARROW){
        s.dir(0,1);
    }if(keyCode==RIGHT_ARROW){
        s.dir(1,0);
    }if(keyCode==LEFT_ARROW){
        s.dir(-1,0);
    }
}

function snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;

    this.dir=function(x,y){
        this.xspeed=x;
        this.yspeed=y;
    }
    this.update=function(){
        this.x+=this.xspeed*scl;
        this.y+=this.yspeed*scl;
        this.x=constrain(this.x,0,width-scl);
        this.y=constrain(this.y,0,height-scl);
    }
    this.show=function(){
        fill(255);
        rect(this.x,this.y,scl,scl);
    }
}

function rect(x,y){
    var c=document.getElementById()
}


