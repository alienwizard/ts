const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

var sourcePath = path.join(__dirname, './src');

module.exports  = {
    context: sourcePath,
    entry: {
        main: "./main.tsx",
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'react-router-redux',
            'redux',
        ]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[id].chunk.js",
        path: path.join(__dirname, 'dist'),
        publicPath: "/", // string
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        rules:[
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /(node_modules)/,
            },
            { 
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                 include: path.resolve(__dirname, '/'),
                use: [
                    { loader: "awesome-typescript-loader" }              
                ]

            },
      
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                test: /\.js$/, 
                exclude: [ /\/node_modules\//, /\/stories\// ],
                enforce: "pre",
                use: [
                    {
                        loader: 'source-map-loader',
                        options: {
                            presets: ["es2015", "react"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [ /\/node_modules\// ],
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ],

                
            },
            {
                test: "\.html$",

                use: [
                    // apply multiple loaders and options
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                        /* ... */
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                include: /\/data\//,
                use: 'json-loader'
            },
            {
                test: /\.eot$/,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },
            {
                test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                include: path.join(__dirname, 'assets/images/tracks'),
                loader: "url-loader?name=[name].[ext]&limit=10000"
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                loader: 'url-loader'
            },
        ]
    },

  resolve: {

    extensions: [' ', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
        flagIcons: path.join(__dirname, 'node_modules/flag-icon-css/css/flag-icon.css')
    }
    // extensions that are used
  },

    performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) { 
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
    devServer: {
        host: "127.0.0.1",
        port: 8080,
        contentBase: path.join(__dirname, "dist"), // boolean | string | array, static file location
        publicPath: '/',
        compress: false, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        // ...
  },
  stats: "errors-only",
  plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
    }),
    new CopyWebpackPlugin([
        { from: '../assets' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            tslint: {
                emitErrors: false,
                failOnHint: false,
                fix: true,
                tsConfigFile: 'tsconfig.json',
            }
        }
    })
  ],
    node: {
    // workaround for webpack-dev-server issue 
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};