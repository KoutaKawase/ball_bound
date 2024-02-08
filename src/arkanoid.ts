import p5 from "p5";

const plate = {
	width: 100,
	height: 13,
	y: 500,
	x: 0,
};

let ball = {
	radius: 7,
	x: 0,
	y: 0,
	vx: 10,
	vy: 10,
	angle: 80,
	isFlying: false,
};

const screen = {
	width: 600,
	height: 600,
};

const fps = 40;

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(screen.width, screen.height);
		p.frameRate(fps);
		p.angleMode(p.DEGREES);
		ball.y = plate.y - 5;
	};

	p.draw = () => {
		p.background(100);

		plate.x = p.constrain(p.mouseX, 0, screen.width - plate.width);
		p.rect(plate.x, plate.y, plate.width, plate.height);

		if (ball.isFlying) {
			ball.x += p.cos(ball.angle) * ball.vx;
			ball.y -= p.sin(ball.angle) * ball.vy;

			if (ball.x + ball.radius > screen.width || ball.x - ball.radius < 0) {
				ball.vx *= -1;
			}
			if (ball.y + ball.radius > screen.height || ball.y - ball.radius < 0) {
				ball.vy *= -1;
			}
		} else {
			ball.x = p.constrain(
				p.mouseX + plate.width / 2,
				0,
				screen.width - plate.width / 2,
			);
		}

		ball.y = p.constrain(ball.y, 0 + ball.radius, screen.height);
		p.circle(ball.x, ball.y, ball.radius * 2);
	};

	p.mouseClicked = () => {
		if (!ball.isFlying) {
			ball = { ...ball, isFlying: true };
		}
	};
};

new p5(sketch);
