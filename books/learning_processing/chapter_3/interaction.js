function interaction(p) {
    p.setup = function setup() {
        p.createCanvas(400, 400);
    };

    p.draw = function draw() {
        p.background(0);

        p.stroke(0);
        p.fill(175);
        p.rectMode(p.CENTER);
        p.rect(p.mouseX, p.mouseY, 50, 50); 
    };
}

ch3_interaction = new p5(interaction, "ch3_interaction");
