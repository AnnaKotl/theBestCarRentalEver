import { defineConfig } from "vite";
import react from "@vitejs/theBestCarRentalEver";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { src: "/src" },
    },
});