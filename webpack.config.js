const path = require('path');

module.exports = {
    entry: './src/gentinets.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'
        ]
    },
    output: {
        filename: 'gentinets.js',
        path: path.resolve(__dirname, 'dist')
    }
};
