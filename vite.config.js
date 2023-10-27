import { defineConfig } from 'vite'
import elmPlugin from 'vite-plugin-elm'

export default defineConfig({
    build: {
        // generate manifest.json in outDir
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: 'src/js/index.js',
            output: {
                assetFileNames: "[name].[ext]"
            }
        },
        outDir: "site/static/assets",
        minify: true,
    },
    plugins: [elmPlugin()],
})