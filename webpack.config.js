const path = require('path');

module.exports = {
    entry: './src/gentinets.ts',
    devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
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
