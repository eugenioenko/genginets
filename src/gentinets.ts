import { Engine } from "./engine";

const gentinets = {
    version: '1.0.0.0'
};
/*
if (typeof window !== 'undefined') {
    window['gentinets'] = gentinets;
} else {
    exports.gentinets = gentinets;
}
*/

window['GENGINE_DEBUG_MODE'] = true;
window['GENGINE_DEBUG_THROW'] = false;

const resources = [
    {
        name: 'sprite1',
        type: 'image',
        url: './resources/test1.png'
    }, {
        name: 'sprite2',
        type: 'image',
        url: './resources/test2.png'
    }
];
const engine = new Engine({
    name: 'engine',
    canvas: 'canvas',
    width: 100,
    height: 100
}, resources);
