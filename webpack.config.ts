import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractCssChunksPlugin from "extract-css-chunks-webpack-plugin";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src", "client", "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [

                    {
                        loader: ExtractCssChunksPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                            esModule: true,
                        },
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            sourceMap: true,
                            localIdentName: '[folder]-[local]-[hash:base64:6]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer'),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "client", "index.html"),
        }),
        new ExtractCssChunksPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
            ignoreOrder: true,
        }) as WebpackPluginInstance,
    ],
    devServer: {
        contentBase: './src/client',
        port: 3000,
        proxy: {
            '/socket.io': {
                target: 'http://localhost:8000',
                ws: true
            },
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' },
            }
        },
        historyApiFallback: true,
    },
};

export default config;