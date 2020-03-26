import { Component } from './components';
import { Camera } from './camera';
/**
 * Abstract class of the Display component of the Engine.
 */
export class Display extends Component {

    public canvas: HTMLCanvasElement;
    public id: string;

    constructor(params) {
        super(params);
        this.x = 0;
        this.y = 0;
        this.canvas = <HTMLCanvasElement>document.getElementById(this.id);
        this.width = this.engine.width;
        this.height = this.engine.height;
        this.canvas.setAttribute('width', this.width.toString());
        this.canvas.setAttribute('height', this.height.toString());
    }

    init() {
        super.init();
    }

    clear() { }

    fillRect(x, y, width, height, color) {

    }

    rect(x, y, width, height, color) {

    }

    circle(x, y, width, color) {

     }

    move() {
        this.clear();
    }
}
/**
 * The component for drawing sprites and figures into the canvas screen.
 */
export class CanvasDisplay extends Display {

    public ctx: CanvasRenderingContext2D;
    public imageSmoothingEnabled: boolean;
    public camera: Camera;

    constructor(params) {
        super(params);
    }

    params() {
        return [];
    }

    config() {
        return {
            imageSmoothingEnabled: false
        };
    }

    init () {
        super.init();
        this.canvas.style.cursor = "none";
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = "16px Helvetica";
        this.ctx.imageSmoothingEnabled = this.imageSmoothingEnabled;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    fillRect(x, y, width, height, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle =  color;
        this.ctx.rect(-this.camera.x + x, -this.camera.y + y, width, height);
        this.ctx.closePath();
        this.ctx.fill();
    }

    rect(x, y, width, height, color) {
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle =  color;
        this.ctx.rect(-this.camera.x + x, -this.camera.y + y, width, height);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    circle(x, y, width, color) {
        this.ctx.beginPath();
        this.ctx.arc(-this.camera.x + x, -this.camera.y + y, width/2, 0, 2 * Math.PI, false);
        this.ctx.strokeStyle =  color;
        this.ctx.closePath();
        this.ctx.stroke();
    }

    fillTriangleUp(x, y, width, height, color) {
        x = -this.camera.x + x;
        y = -this.camera.y + y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + height);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.lineTo(x + width, y);
        this.ctx.closePath();
        // the fill color
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    fillTriangleDown(x, y, width, height, color) {
        x = -this.camera.x + x;
        y = -this.camera.y + y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, y + height);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.closePath();
        // the fill color
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    fillText(text, x, y) {
        this.ctx.fillText(text, x, y);
    }

    drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        this.ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    drawTile(x, y, width, height, sheet, index) {
        let tile = sheet.tiles[index];
        this.ctx.drawImage(sheet.image, tile.x, tile.y, sheet.width, sheet.height, x - this.camera.x, y - this.camera.y, width, height);
    }
}
/*
class WebGLDisplay extends Display {

    constructor(params) {
        super(params);
        this.canvas = document.getElementById(this.id);
        this.gl = this.canvas.getContext('webgl');
        this.scale = 1;
        if (!this.gl) {
            Debug.error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }
        // Set clear color to black, fully opaque
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
}
*/
