import { Game } from './game.js';

const canvas = document.getElementById('game') as HTMLCanvasElement;
if (!canvas) {
    console.error('Canvas element not found');
}

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
if (!ctx) {
    console.error('Canvas context not found');
    throw new Error('Canvas context not found');
}

// Function to resize the canvas to fit the window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call resizeCanvas to set initial canvas size
resizeCanvas();

// Set up the game and run
const game = new Game(ctx);
game.run();

// Listen for window resize events
window.addEventListener('resize', () => {
    resizeCanvas();
    game.run();  // Optionally re-run or re-render after resizing
});
