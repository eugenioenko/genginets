const gentinets = {
    version: '1.0.0.0'
};

if (typeof window !== 'undefined') {
    window['gentinets'] = gentinets;
} else {
    exports.gentinets = gentinets;
}
