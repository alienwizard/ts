const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");

const webpack = require('webpack');

var sourcePath = path.join(__dirname, './src');

module.exports  = function(env) { 
    return {
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
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name]-[id].js",
        path: path.join(__dirname, '../dist'),
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
                exclude: [/(node_modules)/, 'vendor.js'],
                 include: path.resolve(__dirname, '/'),
                use: [
                    { loader: "awesome-typescript-loader", options:{
                        useBabel:true,
                        babelOptions:{
                            presets: [['es2015', {modules: false}]], 
                            plugins: ['syntax-dynamic-import'] 
                        }
                    }},
                       
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
    maxAssetSize: 10000000, // int (in bytes),
    maxEntrypointSize: 5000000, // int (in bytes)
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
        { from: path.join(__dirname, '../assets' )}
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
            tslint: {
                emitErrors: false,
                failOnHint: false,
                fix: true,
                tsConfigFile: 'tsconfig.json',
            }
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
                name: ['main','vendor', '[id]-[name]', 'node_modules'],
                filename: 'vendor.js',
                children: true,
                async: true,
                minChunks: Infinity
    }),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            beautify: false,
            sourceMap: true,
            exclude: [/\/node_modules\//, 'vendor.js'],
            compress: {
                warnings: true,
                pure_funcs: ['console.log', 'window.console.log.apply']
            },
    }),
    new BundleAnalyzerPlugin({
  // Can be `server`, `static` or `disabled`. 
  // In `server` mode analyzer will start HTTP server to show bundle report. 
  // In `static` mode single HTML file with bundle report will be generated. 
  // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. 
  analyzerMode: 'static',
  // Host that will be used in `server` mode to start HTTP server. 
  analyzerHost: '127.0.0.1',
  // Port that will be used in `server` mode to start HTTP server. 
  analyzerPort: 8888,
  // Path to bundle report file that will be generated in `static` mode. 
  // Relative to bundles output directory. 
  reportFilename: 'report.html',
  // Automatically open report in default browser 
  openAnalyzer: true,
  // If `true`, Webpack Stats JSON file will be generated in bundles output directory 
  generateStatsFile: false,
  // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. 
  // Relative to bundles output directory. 
  statsFilename: 'stats.json',
  // Options for `stats.toJson()` method. 
  // For example you can exclude sources of your modules from stats file with `source: false` option. 
  // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21 
  statsOptions: null,
  // Log level. Can be 'info', 'warn', 'error' or 'silent'. 
  logLevel: 'info'
})
  ],
    node: {
    // workaround for webpack-dev-server issue 
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
}
};