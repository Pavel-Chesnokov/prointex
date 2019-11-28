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

    externals: {
        // TimelineMax: 'TimelineMax'
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
            // "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            // "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            // "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            // "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            // "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'),
            // "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            // "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'),
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
            // TweenMax: "gsap/all"
            // Power2: 'gsap/all',
            // TimelineMax: 'gsap/all'
            // setTween: 'gsap/all'

        })
    ]
};
