import { Debug } from './debug';

export interface Params {
    [name: string]: any
}

export interface IConstructable {
    /**
    * The params is used as validation of the arguments pased in the constructor.
    * Params should return an array with the string names of all the keys which should be
    * present during the construction of an gameObject. This will only happen if the debug
    * mode is activated.
     */
    params: () => string[];
    config: () => Params;
    init: () => void;
}

/**
 * Base Object of mostly all the classes of the engine.
 * It creates a structure so that when instances of objects are created,
 * the parameters are passed as object literals.
 *
 * @example
 * let o = new GameObject({x: 0, y: 0});
 *
 */
export class Entity implements IConstructable {

    public params = () => ([]);
    public config = () => ({});
    public init(): void { }

	constructor(params: Params) {
		Debug.validateParams(this.constructor.name, params, this.params());
		Object.assign(this, params);
		const config = this.config();
		for (let key in config) {
			if (typeof this[key] === "undefined") {
				this[key] = config[key];
			}
		}
	}
}
