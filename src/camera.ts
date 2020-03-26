import { Component } from './components';

/**
 * Component for managing camera position on the screen.
 * The Camera is the viewport of the game, meaning you see the game world
 * through the camera.
 * exported Camera
 */
export class Camera extends Component {
    public speed: number;
    public x: number;
    public y: number;
    public width: number;
    public heigth: number;

	constructor(params) {
		super(params);
		this.speed = 10;
    }

	params() {
		return ['x', 'y', 'width', 'height'];
	}

	init() {
		//this.input = this.getComponent("Input");
		super.init();
	}

	move() {
		/*if (this.input.keyCode("KeyS")) this.y -= this.speed;
		if (this.input.keyCode("KeyW")) this.y += this.speed;
		if (this.input.keyCode("KeyD")) this.x += this.speed;
		if (this.input.keyCode("KeyA")) this.x -= this.speed;*/
	}

}
