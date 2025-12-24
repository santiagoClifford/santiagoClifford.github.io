


class GlowLine {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw() {
    // linea difuminada
    strokeWeight(40);
    stroke(blueDifused);
    line(this.x1, this.y1, this.x2, this.y2);

    // linea color
    strokeWeight(4);
    stroke(blueMid);
    line(this.x1, this.y1, this.x2, this.y2);

    // línea brillo
    strokeWeight(2);
    stroke(blueShine);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
