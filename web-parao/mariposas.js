let frame1;
let frame2;
let mariposas = [];
let mariposaQty=8;


function preload() {
  frame1 = loadImage('./imgs/mariposa1.png');
  frame2 = loadImage('./imgs/mariposa2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight*2);
  //background(0,0);

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
}

function draw() {
  //background(220);
  //background(100, 100, 240, 10);
  clear();

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
class Marisopa {
  constructor(x, y, w, h, img1, img2) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img1 = img1;
    this.img2 = img2;
    this.lastX = this.x; // en el constructor

    
        // Semillas únicas para el movimiento
    this.tx = random(1000);
    this.ty = random(1000);
  }

show() {
  let frame = int((millis() / 160) % 2);
  
  // Ver si va hacia la derecha o izquierda
  let mirandoDerecha = this.x - this.lastX > 0;

  push();
  translate(this.x, this.y);

  if (!mirandoDerecha) {
    scale(-1, 1); // voltear horizontalmente
  }

  // Dibujar centrado en su posición
  let img = frame === 0 ? this.img1 : this.img2;
  image(img, 0, 0, this.w, this.h);

  pop();
}
move() {
  // Guardar posición anterior ANTES de mover
  this.lastX = this.x;

  // Movimiento con ruido Perlin
  this.x = map(noise(this.tx), 0, 1, 0, width);
  this.y = map(noise(this.ty), 0, 1, 0, height);

  // Avanzar el ruido
  this.tx += 0.0021;
  this.ty += 0.002;
}

     //<https://editor.p5js.org/ss14736/sketches/xMw_lY0s7>

        isClicked(px, py) {
    // simple hitbox (rectangular)
    return (
      px > this.x - this.w / 2 &&
      px < this.x + this.w / 2 &&
      py > this.y - this.h / 2 &&
      py < this.y + this.h / 2
    );
  }

  onClick() {
    // what happens when clicked
    console.log("Butterfly clicked!");
    window.open("https://clifford1one.github.io", "pagina");
    // you can do things like:
    // window.open("https://example.com");
    // or change color, size, etc.
  }

}
