/* exported Component */

import { Params, Entity } from "./objects";
import { Engine } from "./engine";
import { Debug } from "./debug";

/**
 * This is a base class of the component of the engine,
 * Components are single instance pieces of the engine.
 * The engine consist of multiple components which perform various tasks.
 * Some Components form part of the core of the Engine, others could
 * be added as need at runtime.
 * When the Engine is ready, it will create the instance of the component and pass itself as the engine parameter.
 * Each Component instance has access to the engine
 * The engine is the responsable for calling new Component, this constructor shouldn't be called in the game code
 * @param {object} params Object literal with parameters passed to the component constructed
 * @param {object} engine The instance of the engine, this will be passed by the engine
 */
export class Component extends Entity {
    public engine: Engine;
    private name: string;
    public x: number;
    public y: number;
    public width: number;
    public height: number;

	public params(): string[] {
		return ['name', 'engine'];
	}

	constructor(params: Params) {
		super(params);
	}

	/**
	 * Method called when the component has been added to the engine and is ready
	 */
	public init(): void {
		Debug.success(`${this.name} initialized`);
	}

	/**
	 * Method called each cycle of the engine game loop
	 */
	public move(): void { }

	/**
	 * Method called each cycle of the engine game loop
	 */
	public draw(): void { }

}
