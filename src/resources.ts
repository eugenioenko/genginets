/**
 * A RecourceItem is a media object like image, audio. It is used by the Resources class
 * during the preload phase of the engine loading.
 */

import { Debug } from './debug';
import { Component } from './components';

export interface Resource {
    url: string;
    type: string;
    name: string;
}

class ResourceItem {
    public buffer: any;
    public item: any;
    public url: string;
    public type: string;
    public name: string;
    public loader: Promise<string>;

	constructor(params: Resource) {
		Debug.validateParams('Resources.add', params, ["url", "type", "name"]);
		Object.assign(this, params);
		this.buffer = {};
        this.item = {};
        this.loader = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.responseType = "blob";
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    this.buffer  = request.response;
                    this.item = new Image();
                    this.item.src = window.URL.createObjectURL(request.response);
                    Debug.log(`${this.name}: ${this.url}`);
                    resolve(this.name);
                } else {
                    reject(this.url);
                }
            };
            request.onerror = () => {
                reject(this.url);
            };
            request.open('GET', this.url, true);
            request.send();
        });
	}

	load() {

	}

}
/**
 * Resources component is set of the images and audio resources of the game.
 * It handles adding and getting the resources by a name and also the preload phase of the engine loading.
 */
export class Resources extends Component {
    public items: Map<string, ResourceItem>;
    public resources: Resource[];

	constructor(params) {
		super(params);
        this.items = new Map();
        for (const resource of this.resources) {
            this.add(resource);
        }
	}

	public init() {
        super.init();

	}

	public add(params: Resource) {
		// resources will be always overrided if existed before, problem in the future?
		this.items.set(params.name, new ResourceItem(params));
	}

	public get(name: string) {
		return this.items[name].item;
    }

    public loaders(): Promise<string>[] {
        return Array.from(this.items.values()).map(item => item.loader)
    }
	public remove(name: string) {
	    this.items.delete(name);
	}
}
