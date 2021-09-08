function setup() {
  createCanvas(400, 400);
  background(0);

  for(let i=0; i<10; i++)
  {
    fill(random(256),random(256),random(256));
    let x = random(0, width);
    let y = random(0, height);
    rect(x,y,50,20);
  }
}

let x = 50;

function draw() {

}

function mousePressed(){
  fill(random(256), random(256), random(256));
  ellipse(mouseX, mouseY, 20, 20);
}
