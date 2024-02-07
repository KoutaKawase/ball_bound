import p5 from "p5";

const plate = {
	width: 100,
	height: 15,
	y: 500,
	x: 0,
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
	};

	p.draw = () => {
		p.background(100);

		plate.x = p.constrain(p.mouseX, 0, screen.width - plate.width);
		p.rect(plate.x, plate.y, plate.width, plate.height);
	};
};

new p5(sketch);
