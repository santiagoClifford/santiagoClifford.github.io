let valorCoin;

function setup() {
  createCanvas(400, 400);
  background(220);
  fill(150, 150, 80);
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(30);

  valorCoin = random(0, 1);
  text("calculando...", width / 2, height / 2 - 30);

  text("presione para", width / 2, height / 2 + 30);
  text("obtener su resultado", width / 2, height / 2 + 60);
}

function draw() {

}

function flipCoin() {
  if (valorCoin < 0.5) {
    ellipse(width / 2, height / 2, 200, 200);
    push();
    textSize(100);
    fill(0);
    text("$", width / 2, height / 2);
    fill(220);
    textSize(30);

    text("SELLO", width / 2 - 30, height / 2 + 100, 60, 60);
    pop();
  } else if (valorCoin > 0.5) {
    push();

    ellipse(width / 2, height / 2, 200, 200);
    stroke(0);
    strokeWeight(10);
    ellipse(width / 2 - 20, height / 2 - 10, 20, 20);
    ellipse(width / 2 + 20, height / 2 - 10, 20, 20);
    line(width / 2 - 30, height / 2 + 20, width / 2, height / 2 + 40);
    line(width / 2 + 30, height / 2 + 20, width / 2, height / 2 + 40);

    fill(220);
    text("CARA", width / 2 - 30, height / 2 + 100, 60, 60);
    pop();
  }
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    background(10);
    flipCoin();
  }
}

function flipAnimation(){
  
} 