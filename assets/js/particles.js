const particles = [];


function setup() {
    const canvasDivEl = document.querySelector("#canvas-div");
    let width = canvasDivEl.offsetWidth - 15;
    let height = canvasDivEl.offsetHeight + 100;
    const canvas = createCanvas(width, height);
    canvas.parent('canvas-div');

   const particlesLength = Math.floor(window.innerWidth / 50);

   for (let i = 0; i < particlesLength; i++){
    particles.push(new Particle());
   }
    
}



function draw() {

    background('rgba(66, 146, 206, .2)');
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });
    
    // if (mouseIsPressed) {
    //     fill(255);
    // } else {
    //     fill(155);
    // }
    // //draw circle, this is over the top left circle in the img pattern
    // //top left
    // circle(490, 270, 50);
    // //bottom left
    // circle(490, 425.5, 50);
    // //top right
    // circle(760, 270, 50);
    // //bottom right
    // circle(760, 425.5, 50);
    // //top
    // circle(624, 194, 50);
    // //bottom
    // circle(624, 504, 50);

    
}

class Particle {
    constructor(){
        //position
        this.pos = createVector(random(width), random(height));
        //velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        //size
        this.size = 10;
    }
    //update movement by adding velocity
    update(){
        this.pos.add(this.vel);
        this.edges();
    }

    //draw single particle
    draw(){
        noStroke();
        fill('rgba(255, 100, 255, .5)');
        circle(this.pos.x, this.pos.y, this.size);
    
    }

    //detect edges
    edges(){
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    //connect particles
    checkParticles(particles){
        particles.forEach(particle => {
            const distance = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            if(distance < 120){
                stroke('rgba(66, 255, 200, .5)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}