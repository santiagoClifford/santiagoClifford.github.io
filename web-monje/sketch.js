let hX;
let hY;
let newHue;
let t;
let monje;

let baseY;

function preload(){
    monje = loadImage('./assets/imgs/yoMonje.png');
}

function setup(){
    const c = createCanvas(1200,400);
    background(0,200,0,30);
    c.parent('canvas-container');

    t=0;
    baseY=height/2;

    hX = width/2;
    hY =  height/2;
    newHue=0;
    colorMode(HSB,999);
}

function draw(){
    // background(0);
    newHue++;
    if(newHue>1000){
        newHue=0;
    }
    fill(newHue,800,990);
 
    
    // fill(gradientita);
    

    // fill(20,20,200);
    beginShape();
    vertex(hX-500, hY+180);
    vertex(hX-300, hY-30);
    vertex(hX+300, hY-30);
    vertex(hX+500, hY+180);
    endShape(CLOSE);
    fill(100,10,10);
    triangle(hX-250, hY-40,hX-370,hY+130, hX-130,hY+130);
    ellipseMode(CENTER);
    ellipse(hX-250, hY-10, 120,120);

    rectMode(CENTER);
    rect(hX+210,hY+60,140,140);

    
    let y = baseY + sin(t) * 20; // amplitude
    t += 0.02; 
    image(monje, hX, y);
}