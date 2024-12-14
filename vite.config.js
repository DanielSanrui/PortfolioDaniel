import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "./src",
    build: {
        outDir: "../docs", // Cambia el directorio de salida
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"), // Página principal
            },
        },
    },
    base: "./", // Opcional: rutas relativas para mayor compatibilidad
});