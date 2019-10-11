var hit;
var x = 250;
var y = 720;

var x2 = 270;
var y2 = 720;
var text;
var move;
var move2;
var yup = 2;
var P1life = 3;
var P2life = 3;


    scores=3;

//Green player
var player1 = {
    x : 900,
    y : 700,
    s : 50,
    draw : function(){
        fill(0,255,0);
        rect(this.x,this.y,this.s,this.s);    
    },
    control : function(){
        if(keyIsDown(UP_ARROW)){
            this.y -= 40;
        }
        this.y = constrain(this.y,300,685);
        this.y += 5;

        //    hit = dist(x,y,this.x,this.y);
            hit = dist(x2,y2,this.x,this.y);
    console.log(hit);
        if(hit<=60){
        
         if(frameCount % 25 == 0){
             if(hit<=60){
              P2life -= 1;
            }
         }
         if(P2life == 0){
             this.x = 2500;
        }        

        }
     }


    
}

//Yellow player
var player2 = {
    x : 70,
    y : 700,
    s : 50,
    draw : function(){
        fill(225,255,0);
        rect(this.x,this.y,this.s,this.s);    
    },
    control : function(){
        if(keyIsDown(83)){
            this.y -= 40;
        }
        this.y = constrain(this.y,300,685);
        this.y += 5;
        
        hit = dist(x,y,this.x,this.y);
         //   hit = dist(x2,y2,this.x,this.y);
         console.log(hit);
        if(frameCount % 25 == 0){
             if(hit<=60){
              P1life -= 1;
            }
         }
         if(P1life == 0){
             this.x = 2500;
        }
    }
}

function setup(){
    move = random(1, 9);
    move2 = random(1, 9);
    createCanvas(1000,800);
}



function draw(){
    background(128,0,128);
    fill(0,100,25);
    fill(225,0,0);
    player1.draw();
    player1.control();
    player2.draw();
    player2.control();
    // Text
    textSize(28);
    text("PLAYER1 YELLOW   -  DON'T HIT GREEN BALL",10,30);
    text("PLAYER2 GREEN    -  DON'T HIT RED BALL",10,80);

     if(keyIsDown(UP_ARROW)){
        ypos =+ yup;
     }

   // if(player1.y = 700){
    textSize(30);
    text("P1 Lives: " + P1life,10,250); 
    text("P2 Lives: " + P2life,810,250); 

   //   }

//    rect(70,700,50,50);
    fill(225,225,0);
    var ball1 = new Ball(x, y, '#23d160', 50);
    var ball2 = new Ball(x2, y2, 'red', 50);
    ball1.draw();
    ball2.draw();
    //Limit balls x & y
    y = constrain(y,0,800);
    x = constrain(x,0,1000);

    //Moving ball 1
    x += move*-2;
    if(x>1000 || x<0){
        move = move*-1;
    }

    //moving ball 2
    x2 += move2*-2;
    if(x2>1000 || x2<0){
        move2 = move2*-1;
    }

    // hit = dist(Ball(this.x,this.y),player1(this.x,this.y))

}

// Drawing the balls
function Ball(x, y, color, size){
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;

    this.draw = function(){
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }
    

}




