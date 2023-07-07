import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import mkcert from 'vite-plugin-mkcert';

const viteFontConfig = {
    google: {
        families: ['Roboto', 'Play'],
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mkcert(), VitePluginFonts(viteFontConfig)],
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, './src/components'),
            pages: path.resolve(__dirname, './src/pages'),
        },
    },
    server: {
        origin: 'https:127.0.0.1:5173',
    },
});
