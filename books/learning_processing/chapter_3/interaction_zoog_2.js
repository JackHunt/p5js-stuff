function interaction_zoog_2(p) {
    p.setup = function setup() {
        p.createCanvas(400, 400);
        p.smooth()
    };

    p.draw = function draw() {
        let m_x = p.mouseX;
        let m_y = p.mouseY;

        let a = (m_x / (m_y + 1));
        p.background(m_x, m_y, a * 255);

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
        p.fill(0);
        p.ellipse(m_x - 19, m_y - 30, 16, 32);
        p.ellipse(m_x + 19, m_y - 30, 16, 32);

        // legs
        p.stroke(0);
        p.line(m_x - 10, m_y + 50, m_x - 20, m_y + 60);
        p.line(m_x + 10, m_y + 50, m_x + 20, m_y + 60)
    };
}

ch3_interaction_zoog_2 = new p5(interaction_zoog_2, "ch3_interaction_zoog_2");
