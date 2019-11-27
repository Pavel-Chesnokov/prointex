const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/js/index.js"
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [["@babel/preset-env", { modules: false }]]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Fresco: "@staaky/fresco",
            ScrollMagic: "scrollmagic",
            TweenMax: 'gsap/all',
            Power2: 'gsap/all',
            TimelineMax: 'gsap/all',
            setTween: 'gsap/all'

        })
    ]
};
