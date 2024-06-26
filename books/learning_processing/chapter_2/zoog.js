function zoog(p) {
    p.setup = function setup() {
        p.createCanvas(200,200);
        p.smooth()
    };

    p.draw = function draw() {
        p.background(255)

        p.ellipseMode(p.CENTER)
        p.rectMode(p.CENTER)

        // body
        p.stroke(0);
        p.fill(150);
        p.rect(100,100,20,100);

        // head
        p.fill(255);
        p.ellipse(100,70,60,60);

        // eyes
        p.fill(0);
        p.ellipse(81,70,16,32);
        p.ellipse(119,70,16,32);

        // legs
        p.stroke(0);
        p.line(90,150,80,160);
        p.line(110,150,120,160)
    };
}

ch2_zoog = new p5(zoog, "ch2_zoog");
