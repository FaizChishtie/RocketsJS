var rocket;

function setup(){
  createCanvas(400,300);
  rocket = new Rocket();
}

function draw(){
  backround(0);
  rocket.update();
  roclet.show();
}

function Rocket(){
  this.pos = createVector();
  this.vel = createVector();
  this.acc = createVector();

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0,0,10,50);
    pop();
  }
}
