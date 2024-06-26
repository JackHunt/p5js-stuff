function continuous_line(p) {
    p.setup = function setup() {
        p.createCanvas(400, 400);
        p.background(0);
        p.smooth();
    };

    p.draw = function draw() {
        let mx = p.mouseX;
        let my = p.mouseY;
        let p_mx = p.pmouseX;
        let p_my = p.pmouseY;

        let w = (p.abs(mx - p_mx) + p.abs(my - p_my)) / 2;
        p.strokeWeight(w);
        p.stroke(255);

        p.line(p_mx, p_my, mx, my);
    };
}

ch3_continuous_line = new p5(continuous_line, "ch3_continuous_line");
