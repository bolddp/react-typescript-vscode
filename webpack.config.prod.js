const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configPlugin = require('./config/configPlugin');

module.exports = env => {
    return {
        entry: "./src/index.tsx",
        output: {
			outputPath: "/",
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
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
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Production',
                template: 'public/index.prod.html'
            }),
            new CopyWebpackPlugin([
                { from: 'public/favicon.ico' }, // <- your path to favicon
            ]),
            configPlugin(env.ENV_TYPE)
        ]
    }
};