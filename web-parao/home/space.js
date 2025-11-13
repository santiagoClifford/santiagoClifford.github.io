let filas = [];
const numFilas = 17;
const alturaFila = 25;
const separacion = 2;
const velocidad = 1.2;

let burdeo;
let teel;
let azul;
const paleta = [];

function setup() {
    // full-window fixed background canvas
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('position', 'fixed');   // fijo al viewport
  c.style('top', '0px');
  c.style('left', '0px');
  c.style('z-index', '0');        // z-index bajo
  c.style('pointer-events', 'none'); // no bloquea clicks
  c.id('spaceCanvas');

  burdeo = color(69, 12, 28);
 teel = color(17, 72, 82);
 azul = color(0, 0, 87);
  
    paleta.push(burdeo);
  paleta.push(teel);
  paleta.push(azul);

  
  // Crear filas
  //   for(valor inicial; valor final; alteración)
  for (let i = 0; i < numFilas; i++) {
    let y = i * (alturaFila + 0) - 10; // Espacio entre filas
    let direccion = random([-1, 1]); // -1 = izquierda, 1 = derecha

    let rectangulosFila = [];
    let x = 0;

    // Generar rectángulos para esta fila
    while (x < width * 1.5) {
      let ancho = random(60, 120);

      rectangulosFila.push({
        x: x,
        ancho: ancho,
        color: paleta[floor(random(paleta.length))]
      });

      x += ancho + separacion;
    }

    filas.push({
      y: y,
      rectangulos: rectangulosFila,
      offset: 0,
      direccion: direccion,
      color: color(random(50, 200), random(50, 200), random(50, 200)),
    });
  }
}

function draw() {
  background(220);

  // Dibujar y actualizar cada fila
  for (let i = 0; i < filas.length; i++) {
    let fila = filas[i];

    // Actualizar posición según la dirección
    fila.offset += velocidad * fila.direccion;

    // Reiniciar offset cuando se sale completamente del canvas
    if (fila.offset > width) {
      fila.offset = -width;
    } else if (fila.offset < -width) {
      fila.offset = width;
    }

    // Dibujar todos los rectángulos de esta fila
    strokeWeight(4);

    for (let j = 0; j < fila.rectangulos.length; j++) {
      let recti = fila.rectangulos[j];
      let x = recti.x + fila.offset;

      // Ajuste para bucle infinito
      if (x > width) {
        x = x - width * 1.5;
      } else if (x + recti.ancho < 0) {
        x = x + width * 1.5;
      }

      // Dibujar rectángulo si está visible en el canvas
      if (x + recti.ancho > 0 && x < width) {
        fill(recti.color);
        rect(x, fila.y, recti.ancho, alturaFila);
      }
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
