import { Sprite } from './sprites.js';
import { Vector } from './vector.js';

export class Game {
    private ctx: CanvasRenderingContext2D;
    private tileSize: Vector;
    private rows: number;
    private cols: number;
    private sprite: Sprite;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.tileSize = new Vector(64, 32);  // Tile size (width x height)
        this.rows = Math.floor(ctx.canvas.height / this.tileSize.y);
        this.cols = Math.floor(ctx.canvas.width / this.tileSize.x);

        // Initialize the sprite with the path to the sprite image
        this.sprite = new Sprite('./assets/tile.png');
    }

    public run() {
        this.render();
    }

    private render() {
        // Set background color
        this.ctx.fillStyle = '#0e1113';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);  // Fill the entire canvas

        // Loop to render multiple tiles
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const pos = this.hexToPixel(new Vector(col, row));

                // Draw the first tile from the sprite sheet
                this.sprite.drawTile(
                    this.ctx,
                    0, 0, this.tileSize.x, this.tileSize.y,  // Source tile in sprite sheet
                    pos.x, pos.y                            // Position on canvas
                );
            }
        }

        requestAnimationFrame(() => this.render());
    }

    private hexToPixel(hex: Vector): Vector {
        const x = this.tileSize.x * (hex.x + hex.y / 2);
        const y = this.tileSize.y * (Math.sqrt(3) / 2 * hex.y);
        return new Vector(x, y);
    }
}
