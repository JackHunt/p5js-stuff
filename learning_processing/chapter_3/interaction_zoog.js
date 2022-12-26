function setup() {
    createCanvas(400, 400);
    smooth();
    frameRate(30);
}

function draw() {
    background(255);
    
    ellipseMode(CENTER)
    rectMode(CENTER)
    
    // body
    stroke(0);
    fill(150);
    rect(mouseX, mouseY, 20, 100);

    // head
    fill(255);
    ellipse(mouseX, mouseY - 30, 60, 60);

    // eyes
    fill(mouseX, 0, mouseY);
    ellipse(mouseX - 19, mouseY - 30, 16, 32);
    ellipse(mouseX + 19, mouseY - 30, 16, 32);

    // legs
    stroke(0);
    line(mouseX - 10, mouseY + 50, pmouseX - 20, pmouseY + 60);
    line(mouseX + 10, mouseY + 50, pmouseX + 20, pmouseY + 60)
}

function mousePressed() {
    alert("Take me to your leader!")
}

function touchEnded() {
    mousePressed();
}