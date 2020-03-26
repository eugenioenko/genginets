import { Component } from './components';
import { Params } from './objects';
import { Debug } from './debug';
import { Resources, Resource } from './resources';
import { Time } from './time';
import { Camera } from './camera';
import { CanvasDisplay } from './display';

/**
 * Engine is the main object of the game engine.
 * Engine consist of a group of different components which manage different tasks.
 * Each component is a lego piece, and the engine is the glue which binds them together.
 * Once the document is ready, Engine will initialize each component added
 * into it, call the preloader method, execute the game creation function
 * and then start executing the game loop.
 */
export class Engine extends Component {

    public components: Map<string, Component>;
    public resources: Resources;
    public camera: Camera;
    public display: CanvasDisplay;
    public time: Time;
    public count = 0;
    public canvas: string;

    public params(): string[] {
        return [];
    }

    public config(): object {
		return {
			x: 0,
			y: 0,
			width: 320,
            height:  240,
            canvas: 'canvas',
            name: 'engine'

		};
	}

    constructor(params: Params, resources: Resource[] = []) {
        super(params);
        this.engine = this;
        this.x = 0;
        this.y = 0;
        this.components = new Map();
        Debug.success('initializing Gengine');
        this.resources = this.add('resources', Resources, { resources: resources });
        window.addEventListener('DOMContentLoaded', () => {
            Debug.success('dom content loaded');
            this.preload();
        });
    }

    public preload(): void {
        Debug.group('preloading resources');
        const loaders = (this.get('resources') as Resources).loaders();
        Promise.all(loaders)
            .then(() => {
                Debug.groupEnd();
                this.init();
            }, () => {
                Debug.error('Error loading resources')
                Debug.groupEnd();
            });

    }

    public init(): void {
        this.time = this.add('time', Time);
        this.display = this.add('display', CanvasDisplay, {id: this.canvas });
        super.init();
        console.log(this);
        this.update();
    }

    public update = () =>  {
        this.move();
        this.draw();
        this.debugInfo();
        if(this.count++ >= 100) {return;}
        window.requestAnimationFrame(this.update);
    }

    /*
    public init() {
        Debug.group('Engine loaded components');
        this.addComponent("Resources", Resources);
        this.addComponent("Camera", Camera, {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.addComponent("Input", Input);
        this.addComponent("Time", Time);
        this.addComponent("Sound", Sound);
        this.addComponent("Display", CanvasDisplay, {
            id: 'canvas',
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.addComponent("Stage", Stage);
        this.addComponent("Events", Events);
        Debug.groupEnd();
        this.time = this.component.Time;
        this.display = this.component.Display;
        this.stage = this.component.Stage;
        this.resources = this.component.Resources;
        this.sound = this.component.Sound;
        this.input = this.component.Input;
    }
    */
    /**
     * Static function to replace the windows.onload method.
     * Once the window is ready, engine will initialize its components, execute
     * the preloader and when preloader loaded all the resources, create the game
     * and execute the gameloop.
     */

     /*
    static create(params) {
        Debug.validateParams('Engine.create', params, ["canvas", "width", "height", "preload", "game"]);
        (function() {
            let engine = new Engine({
                canvas: params.canvas,
                width: params.width,
                height: params.height
            });
            window.addEventListener('load', function() {
                engine.init();
                params.preload(engine);
                engine.resources.preload(params.game); // important: preload on complete calls game function
                engine.gameLoop();
            });
        })();
    }*/

    public add<T extends Component>(
        name: string, component: new(params: Params) => T,
        params: Params = {}
    ): T {
        if (Debug.active()) {
            if (this.components.has(name)) {
                Debug.error(`Component ${name} is already defined`);
            }
        }
        params.name = name;
        params.engine = this;
        const instance = new component(params);
        this.components.set(name, instance);
        instance.init();
        return instance;
    }

    public get(name: string): Component {
        if (Debug.active()) {
            if (!this.components.has(name)) {
                Debug.error(`Component ${name} is not registred`);
            }
        }
        return this.components.get(name);
    }

    public move(): void {

        for (const component of this.components) {
            component[1].move();
        }
    }

    public draw(): void {
        /*this.display.clear();
        for (let component of this.components) {
            component.draw();
        }*/
    }

    public debugInfo(): void {
        if (!Debug.active()) {
            return;
        }
        /* this.display.fillText((this.time.time).toFixed(2), 20, 20);
        this.display.fillText((this.time.deltaTime).toFixed(4), 20, 40);
        this.display.fillText(this.time.fps.toFixed(2), 20, 60);*/
    }
}
