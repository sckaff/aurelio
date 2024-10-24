import { Game } from "./game.js";

const canvas = document.getElementById("game") as HTMLCanvasElement;
if (!canvas) {
    throw new Error("Canvas element not found");
}

const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Canvas context not found");
}

const game = new Game(ctx);
game.run();