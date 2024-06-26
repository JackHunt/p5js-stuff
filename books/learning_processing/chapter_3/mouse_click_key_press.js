function mouse_click_key_press(p) {
    p.setup = function setup(){
        p.createCanvas(400, 400);
        p.background(0);
    };

    p.draw = function draw() {
        //
    };

    p.mousePressed = function mousePressed() {
        p.stroke(255);
        p.fill(175);
        p.rectMode(p.CENTER);
        p.rect(p.mouseX, p.mouseY, 32, 32);
    };

    p.touchEnded = function touchEnded() {
        p.mousePressed()
    };

    p.keyPressed = function keyPressed() {
        p.background(0);
    };
}

ch3_mouse_click_key_press = new p5(mouse_click_key_press,
                                   "ch3_mouse_click_key_press");
