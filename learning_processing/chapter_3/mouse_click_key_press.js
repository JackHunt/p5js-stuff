function setup(){
    createCanvas(400, 400);
    background(0);
}

function draw() {
    //
}

function mousePressed() {
    stroke(255);
    fill(175);
    rectMode(CENTER);
    rect(mouseX, mouseY, 32, 32);
}

function touchEnded() {
    mousePressed()
}

function keyPressed() {
    background(0);
}
