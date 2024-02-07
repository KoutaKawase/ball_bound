import p5 from "p5";

const plate = {
	width: 100,
	height: 13,
	y: 500,
	x: 0,
};

let ball = {
	diameter: 15,
	x: 0,
	y: 0,
	vy: 10,
	isFlying: false,
};

const screen = {
	width: 600,
	height: 600,
};
const fps = 30;

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(screen.width, screen.height);
		p.frameRate(fps);
		ball.y = plate.y - plate.height + 5;
	};

	p.draw = () => {
		p.background(100);

		plate.x = p.constrain(p.mouseX, 0, screen.width - plate.width);
		p.rect(plate.x, plate.y, plate.width, plate.height);

		ball.x = p.constrain(
			p.mouseX + plate.width / 2,
			0,
			screen.width - plate.width / 2,
		);
		p.circle(ball.x, ball.y, ball.diameter);

		if (ball.isFlying) {
			ball.y -= ball.vy;
		}
	};

	p.mouseClicked = () => {
		if (!ball.isFlying) {
			ball = { ...ball, isFlying: true };
		}
	};
};

new p5(sketch);
