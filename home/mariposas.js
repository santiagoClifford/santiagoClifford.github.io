let frame1, frame2;
let mariposas = [];
const CONFIG = {
  qty: 4,
  labels: ['proyectos', 'about me', 'sketches', 'contacto'],
  links: ['./proyects/proyecstos.html', './about/aboutme.html', 'https://editor.p5js.org/clifford1one/sketches', './contacto/contact.html'],
  colors: ['#FF6B6B', '#4ECDC4', '#FFD166', '#845EC2']
};

function preload() {
  frame1 = loadImage('../imgs/mariposa1.png');
  frame2 = loadImage('../imgs/mariposa2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  for (let i = 0; i < CONFIG.qty; i++) {
    mariposas.push(new Marisopa(
      random(width), random(height), random(40, 50),
      frame1, frame2,
      CONFIG.labels[i % CONFIG.labels.length],
      CONFIG.links[i % CONFIG.links.length],
      CONFIG.colors[i % CONFIG.colors.length]
    ));
  }
}

function draw() {
  clear();
  mariposas.forEach(m => { m.move(); m.show(); });
}

function mousePressed() {
  for (let m of mariposas) {
    if (m.isClicked(mouseX, mouseY)) {
      m.onClick();
      break;
    }
  }
}
class Marisopa {
  constructor(x, y, w, img1, img2, label, link, rectColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.img1 = img1;
    this.img2 = img2;
    this.label = label;
    this.link = link;
    this.color = color(rectColor);
    this.lastX = x;
    this.tx = random(1000);
    this.ty = random(1000);
  }

  show() {
    let frame = int((millis() / 160) % 2);
    let mirandoDerecha = this.x - this.lastX > 0;

    push();
    translate(this.x, this.y);
    if (!mirandoDerecha) scale(-1, 1);
    image(frame === 0 ? this.img1 : this.img2, 0, 0, this.w, this.w);
    pop();

    push();
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    rect(this.x - 30, this.y - this.w / 2 - 40, 60, 25);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(12);
    noStroke();
    text(this.label, this.x, this.y - this.w / 2 - 27);
    pop();
  }

  move() {
    this.lastX = this.x;
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.0021;
    this.ty += 0.002;
  }

  isClicked(px, py) {
    return px > this.x - this.w / 2 && px < this.x + this.w / 2 &&
           py > this.y - this.w / 2 && py < this.y + this.w / 2;
  }

  onClick() {
    window.open(this.link, "_blank");
  }
}
