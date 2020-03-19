/* exported Debug */
/**
 * Class with static methods to facilitate the messages on the javascript console.
 * All the methods of Debug class will only run if the debug mode is on.
 * To activate the debug mode, declare a global variable before initializing the engine
 * with the name: GENGINE_DEBUG_MODE = true.
 * If the debug mode is off, no messages would be sent to the console.
 * While developing your project, its recomended to have the debug mode on to get
 * some messages of the state of the engine.
 */
export class Debug {

	public static active(): boolean {
		return window['GENGINE_DEBUG_MODE'];
	}

	public static log(message: string): void {
		if (!Debug.active()) { return; }
		console.trace();
		console.log(message);
	}

	public static info(message: string): void {
		if (!Debug.active()) { return; }
		console.info(`%c${message}`, 'color: blue');
	}
	public static success(message: string): void {
		if (!Debug.active()) { return; }
		console.info(`%c${message}`, 'color: green');
	}

	public static warn(message: string): void {
		if (!Debug.active()) { return; }
		console.warn(message);
	}

	public static error(message: string): void {
		if (!Debug.active()) { return; }
		console.groupEnd();
		if (window['GENGINE_DEBUG_THROW']) {
			throw new Error(message);
		} else {
			console.error(message);
		}
	}

	public static group(name: string): void {
		if (!Debug.active()) { return; }
		console.groupCollapsed(name);
	}

	public static groupEnd() {
		if (!Debug.active()) { return; }
		console.groupEnd();
	}

	/**
	 * Validates that the object literal of the constructor
	 * has the elements of the required array
	 * @param  {object} params   The constructor argument
	 * @param  {array} required The list of required keys
	 */
	public static validateParams(name: string, params: any, required: any): void {
		if (!Debug.active()) { return; }
		if (!required || !required.length) { return; }
		if (required.length && !params) {
			Debug.warn(`${name} requires this members in the constructor: {${required.join(',')}}`);
		}
		for (const key of required) {
			if (typeof params[key] === "undefined") {
				Debug.error(`${name} requires of "${key}" in the constructor`);
			}
		}
	}

}
