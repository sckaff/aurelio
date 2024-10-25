import { Vector } from './vector.js';

export class Game {
    private ctx: CanvasRenderingContext2D;
    private tileSize: Vector;
    private rows: number;
    private cols: number;
    private spriteSheet: HTMLImageElement;
    private isImageLoaded: boolean = false;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        // For isometric tiles, width is typically 2x height
        this.tileSize = new Vector(64, 32);
        this.rows = 3;
        this.cols = 3;
        this.spriteSheet = new Image();
        this.loadAssets();
    }

    private loadAssets(): void {
        this.spriteSheet.src = "./assets/sprites.png";
        this.spriteSheet.onload = () => {
            this.isImageLoaded = true;
            this.run();
        };
    }
    
    public run(): void {
        this.render();
    }

    private render(): void {
        // Clear the canvas
        this.ctx.fillStyle = '#0e1113';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        if (this.isImageLoaded) {
            this.drawIsometricGrid();
        }

        requestAnimationFrame(() => this.render());
    }

    private cartesianToIsometric(x: number, y: number): Vector {
        // Convert cartesian coordinates to isometric coordinates
        return new Vector(
            (x - y) * this.tileSize.x / 2,
            (x + y) * this.tileSize.y / 2
        );
    }

    private drawIsometricGrid(): void {
        // Calculate the total width and height of the grid in isometric space
        const gridWidth = (this.rows + this.cols) * (this.tileSize.x / 2);
        const gridHeight = (this.rows + this.cols) * (this.tileSize.y / 2);

        // Calculate starting position to center the grid
        const startX = (this.ctx.canvas.width - gridWidth) / 2 + (this.cols * this.tileSize.x / 2);
        const startY = (this.ctx.canvas.height - gridHeight) / 2;

        // Draw tiles in isometric order (back to front)
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                // Convert grid coordinates to isometric coordinates
                const isoPos = this.cartesianToIsometric(col, row);
                
                // Calculate final screen position
                const screenX = startX + isoPos.x;
                const screenY = startY + isoPos.y;

                // Optional: Add depth sorting by drawing from back to front
                this.drawIsometricTile(screenX, screenY);
            }
        }
    }

    private drawIsometricTile(x: number, y: number): void {
        // Draw the tile at the specified isometric position
        this.ctx.drawImage(
            this.spriteSheet,
            0, 0,                    // Source x, y
            64, 32,                  // Source width, height
            x, y,                    // Destination x, y
            this.tileSize.x,         // Destination width
            this.tileSize.y          // Destination height
        );
    }
}