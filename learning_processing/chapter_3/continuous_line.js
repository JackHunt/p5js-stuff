function setup() {
    createCanvas(400, 400);
    background(0);
    smooth();
}

function draw() {
    let w = (abs(mouseX - pmouseX) + abs(mouseY - pmouseY)) / 2;
    strokeWeight(w);
    stroke(255);
    line(pmouseX, pmouseY, mouseX, mouseY);
}
