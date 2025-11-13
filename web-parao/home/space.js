let particles = [];

function setup() {
  createCanvas(600, 600);
    // Initialize particles and add them to array
  for (let i = 0; i < 400; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
    // Loop through all particles to display and move them
    for (let particle of particles) {
        particle.display();
        particle.move();
    }
}

// Define the Particle class
class Particle {
  constructor() {
    // Set initial position to a random point within the canvas
    this.pos = createVector(random(width), random(height));
    this.size = random(0.5, 2);
    //Set random transparency value
    this.alpha = random(150, 255);
    this.noiseOffset = random(0, 1000);
    this.rate = random(-1, 1); 
    this.vertRate = random(-1, 1); 
  }
  
  // Display the particle on the canvas
  display() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  // Update the particle's position
  move() {
    // Calculate a noise value for organic movement
    let noiseValue = noise(this.noiseOffset);
    this.pos.x += map(noiseValue, 0, 1, -1, 1) * this.rate;
    this.pos.y += map(noiseValue, 0, 1, -1, 1) * this.vertRate;
    
    // Wrap the particle around edges to make it looks like space
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
        
    // Increment the noise offset for the next frame
    this.noiseOffset += 0.01;
  }
}
