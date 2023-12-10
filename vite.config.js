import { defineConfig } from "vite";
import react from "@vitejs/theBestCarRentalEver";

export default defineConfig({
    plugins: [react()],
    base: "/rent-n-roll-auto",
    resolve: {
        alias: { src: "/src" },
    },
});