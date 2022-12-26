function setup() {
    createCanvas(400, 400);
    smooth()
}

function draw() {
    let a = (mouseX / (mouseY + 1));
    background(mouseX, mouseY, a * 255);
    
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
    fill(0);
    ellipse(mouseX - 19, mouseY - 30, 16, 32);
    ellipse(mouseX + 19, mouseY - 30, 16, 32);

    // legs
    stroke(0);
    line(mouseX - 10, mouseY + 50, mouseX - 20, mouseY + 60);
    line(mouseX + 10, mouseY + 50, mouseX + 20, mouseY + 60)
}
