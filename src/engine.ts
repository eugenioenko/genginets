import { Component } from './components';
import { Params } from './objects';
import { Debug } from './debug';
import { Resources, Resource } from './resources';

/**
 * Engine is the main object of the game engine.
 * Engine consist of a group of different components which manage different tasks.
 * Each component is a lego piece, and the engine is the glue which binds them together.
 * Once the document is ready, Engine will initialize each component added
 * into it, call the preloader method, execute the game creation function
 * and then start executing the game loop.
 */
export class Engine extends Component {

    public x: number;
    public y: number;
    public components: Map<string, Component>;

    public params(): string[] {
        return ['canvas', 'width', 'height'];
    }

    constructor(params: Params, resources: Resource[] = []) {
        super(params);
        this.engine = this;
        this.x = 0;
        this.y = 0;
        this.components = new Map();
        this.add('resources', Resources, { resources: resources });
        this.init();
        // this.utils = new Utils();
    }

    public update = () =>  {
        this.move();
        this.draw();
        this.debugInfo();
        window.requestAnimationFrame(this.update);
    }

    public preload(): void {
        Debug.group('Preloading Resources');
        const loaders = (this.get('resources') as Resources).loaders();
        Promise.all(loaders)
            .then(data => {
                console.info(data);
            }, () => {
                Debug.error('Error loading resources')
            });
        Debug.groupEnd();
    }

    public init(): void {
        this.preload();
        super.init();
        // this.update();
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

    public add(name: string, component: typeof Component, params: Params = {}): void {
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
        console.log('move');
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
