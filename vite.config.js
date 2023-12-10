import { defineConfig } from "vite";
import react from "@vitejs/theBestCarRentalEver";

export default defineConfig({
    plugins: [react()],
    base: "/theBestCarRentalEver",
    resolve: {
        alias: { src: "/src" },
    },
});