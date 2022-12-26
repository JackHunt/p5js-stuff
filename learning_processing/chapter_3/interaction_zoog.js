function interaction_zoog(p) {
    p.setup = function setup() {
        p.createCanvas(400, 400);
        p.smooth();
        p.frameRate(30);
    };
    
    p.draw = function draw() {
        let m_x = p.mouseX;
        let m_y = p.mouseY;
        let p_m_x = p.pmouseX;
        let p_m_y = p.pmouseY;

        p.background(255);

        p.ellipseMode(p.CENTER);
        p.rectMode(p.CENTER);

        // body
        p.stroke(0);
        p.fill(150);
        p.rect(m_x, m_y, 20, 100);

        // head
        p.fill(255);
        p.ellipse(m_x, m_y - 30, 60, 60);

        // eyes
        p.fill(m_x, 0, m_y);
        p.ellipse(m_x - 19, m_y - 30, 16, 32);
        p.ellipse(m_x + 19, m_y - 30, 16, 32);

        // legs
        p.stroke(0);
        p.line(m_x - 10, m_y + 50, p_m_x - 20, p_m_y + 60);
        p.line(m_x + 10, m_y + 50, p_m_x + 20, p_m_y + 60);
    };

    p.mousePressed = function mousePressed() {
        print("Take me to your leader!")
    };

    p.touchEnded = function touchEnded() {
        p.mousePressed();
    };
}

ch3_interaction_zoog = new p5(interaction_zoog,
                              "ch3_interaction_zoog");
