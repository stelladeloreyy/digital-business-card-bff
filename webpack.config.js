const path = require('path');

module.exports = {
    entry: './react/client.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'client.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env',]
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};