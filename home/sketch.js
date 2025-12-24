let hX;
let hY;

let lineaHoriz;
let linea;

let frame1;
let frame2;
let mariposas = [];
let mariposaQty = 5;

let titleSize = 40;

function preload() {
  frame1 = loadImage('./home/imgHome/mariposa1.png');
  frame2 = loadImage("./home/imgHome/mariposa2.png");
  avatar = loadImage("./home/imgHome/gif-avatar-clf.gif");
  gorritoXmas=loadImage('./home/imgHome/xmasHat2.png');
}

function setup() {
  createCanvas(1600, 800);
  //background(0,0);

  blueShine = color(180, 210, 250);
  blueMid = color(20, 180, 255);
  blueDifused = color(40, 200, 255, 15);

  hX = width / 2;
  hY = height / 2;

  //texto
  textFont("Courier");
  textSize(titleSize);

  imageMode(CENTER);
  //  tiempoTranscurrido=millis();

  //10 mariposas
  for (let i = 0; i < mariposaQty; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(40, 50);
    let h = w;
    //mariposas.push añade un elemento al array mariposas[]
    mariposas.push(new Marisopa(x, y, w, h, frame1, frame2));
  }

  lineaHoriz = new GlowLine(hX - 350, hY + 40, hX + 350, hY + 40);

  lineaHorTop = new GlowLine(hX - 350, hY + 40 - 240, hX + 350, hY + 40 - 240);

  lineaVertIzq = new GlowLine(hX - 350, hY + 40, hX - 350, hY - 200);
  lineaVertIzqOut = new GlowLine(
    hX - 350 - 50,
    hY + 40 + 60,
    hX - 350 - 50,
    hY - 200 + 60
  );

  lineaVertDer = new GlowLine(hX + 350, hY + 40, hX + 350, hY - 200);
  lineaVertDerOut = new GlowLine(
    hX + 350 + 50,
    hY + 40 + 60,
    hX + 350 + 50,
    hY - 200 + 60
  );

  lineaDiagIzq = new GlowLine(hX - 350, hY + 40, hX - 400, hY + 100);

  lineaDiagIzqRoof = new GlowLine(
    hX - 350,
    hY + 40 - 240,
    hX - 400,
    hY + 100 - 240
  );

  lineaDiagDer = new GlowLine(hX + 350, hY + 40, hX + 400, hY + 100);

  lineaDiagDerRoof = new GlowLine(
    hX + 350,
    hY + 40 - 240,
    hX + 400,
    hY + 100 - 240
  );

  lineaHorBottom = new GlowLine(hX - 400, hY + 100, hX + 400, hY + 100);

  // lineaHorTop2 = new GlowLine(hX - 400, hY + 40-180, hX + 400, hY + 40-180);

  // gif
  avatar = createImg("./home/imgHome/gif-avatar-clf.gif", "a gif of me rotating");
  avatar.position(hX - 375, hY - 240); // Position the GIF on the page
  avatar.style('z-index', '1');
  
  // gorrito
gorritoXmas=createImg('./home/imgHome/xmasHat2.png','gorrito de navidad');
   gorritoXmas.position(hX-270,hY-176);
  // pngOverlay.style('position', 'absolute');
  gorritoXmas.style('z-index', '2');
  gorritoXmas.size(36,32);
  
}

function draw() {
  background(120);
  // image(xmasHat,hX-250,hY-154,40,27);
  //clear();
  lineaHoriz.draw();

  lineaVertIzq.draw();
  lineaVertIzqOut.draw();

  // lineaVertIzq2.draw();

  lineaVertDer.draw();
  lineaVertDerOut.draw();

  // lineaVertDer2.draw();

  lineaDiagIzq.draw();
  lineaDiagDer.draw();

  lineaHorBottom.draw();
  lineaHorTop.draw();

  //  lineaHorTop2.draw();

  lineaDiagIzqRoof.draw();
  lineaDiagDerRoof.draw();

  push();
  //texto
  // noStroke();
  stroke(0);
  strokeWeight(1);
  text("santiagoClifford", hX - 120, hY - 110);
  pop();
  //mostrar y mover todas las mariposas
  for (let i = 0; i < mariposaQty; i++) {
    //para cada mariposa del array, aplicar el método move y show
    mariposas[i].move();
    mariposas[i].show();
  }
}

function mousePressed() {
  for (let m of mariposas) {
    if (m.isClicked(mouseX, mouseY)) {
      m.onClick();
      break; // optional, stops at first one
    }
  }
}
