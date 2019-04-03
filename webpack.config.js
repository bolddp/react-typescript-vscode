const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "/dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval-source-map",
    devServer: {
        contentBase: __dirname,
        publicPath: "/dist/",
        historyApiFallback: true,
        host: "127.0.0.1",
        port: 3000,
        open: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000' },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.s[c|a]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BFF_URL': JSON.stringify('http://localhost:3000')
        }),
        new CopyWebpackPlugin([
            { from: './public/favicon.ico' }, // <- your path to favicon
        ])
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};