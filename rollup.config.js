import elm from 'rollup-plugin-elm';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: 'src/js/index.js',
    output: {
        dir: 'site/static/assets/',
        format: 'iife'
    },
    plugins: [
        elm({
            exclude: 'elm-stuff/**',
            compiler: {
                optimize: false,
                debug: true,
            }
        }),
        postcss({
            config: {
                path: "./postcss.config.js",
            },
            extensions: [".css", "scss"],
            extract: true,
            minimize: isProduction,
            // modules: true,
        }),        
    ]
}
