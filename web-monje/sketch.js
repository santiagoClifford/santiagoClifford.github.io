function setup(){
    const c = createCanvas(600,400);
    background(0,200,0);
    c.parent("canvas-container");
}

function draw(){
    background(0);
    fill(200,0,0);
    ellipseMode(CENTER);
    ellipse(200,200,200,200);
} 