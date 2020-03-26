import { Component } from "./components";

/**
 * Manages the time of the game.
 * time.startTime: seconds elapsed scince the game started
 * time.frameTime: almost the same as startTime, has the elapsed seconds
 * scince the game started but it updates the value by counting the frametime of each gameloop.
 * time.deltaTime: inverse relative value to the fps of the game. When the game runs on 60fps the value is 1.
 * When the fps drop, the deltaTime value is increased proportionaly to the amount of fps droped.
 * Example:
 * 60fps: deltaTime == 1
 * 30fps: deltaTime == 2
 * 15fps: deltaTime == 4
 */
export class Time extends Component {

    public deltaTime = 0;
    public time = 0;
    public frameTime = 0;
    public frameCount = 0;
    public fps = 0;
    public startTime = performance.now() / 1000;
    public lastTime = 0;
    private deltaTimeFS = 0;

    constructor(params) {
        super(params);
    }

    public init(): void {
        this.lastTime = performance.now() / 1000;
        super.init();
    }

    public move(): void {
        const current = performance.now() / 1000;
        this.deltaTimeFS = current - this.lastTime;
        this.deltaTime = this.deltaTimeFS * 60;
        this.frameTime += this.deltaTime;
        this.time = current - this.startTime;
        this.lastTime = current;
        this.fps = 1000 / (this.deltaTimeFS * 1000);
    }
}
