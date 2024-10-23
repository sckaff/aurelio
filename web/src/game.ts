import { Vector } from "./vector.js";  // Assuming the Vector class is in vector.ts

export class Game {
    private ctx: CanvasRenderingContext2D;
    private tileImage: HTMLImageElement;
    private tileSize: Vector;  // Vector to represent the tile's width and height
    private hexOffset: number;  // Offset between rows for staggered layout
    private hexWidth: number;  // Width of the hexagon in pixels
    private hexHeight: number;  // Height of the hexagon in pixels
    private cols: number;  // Number of columns
    private rows: number;  // Number of rows

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;

        // Set hexagonal tile dimensions (95x63)
        this.tileSize = new Vector(95, 63);
        this.hexWidth = 95;  // Full width of the hexagon
        this.hexHeight = 63;  // Height of the hexagon
        this.hexOffset = this.hexHeight / 2;  // Staggered offset for rows

        // Calculate number of tiles that can fit in the canvas
        this.cols = Math.ceil(ctx.canvas.width / this.hexWidth);
        this.rows = Math.ceil(ctx.canvas.height / this.hexHeight);

        // Load the tile image
        this.tileImage = new Image();
        this.tileImage.src = './assets/tile.png';  // Path to the sprite sheet
        this.tileImage.onload = () => {
            // Start the game after the image is loaded
            this.run();
        };
    }

    public run() {
        // Start rendering loop
        requestAnimationFrame(() => this.render());
    }

    private render() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Render hexagonal tiles
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                // Calculate the position for each tile using hexagonal grid
                const pos = this.hexToPixel(new Vector(col, row));
                
                // Draw the tile image at the calculated position
                this.ctx.drawImage(
                    this.tileImage,
                    0, 0, this.tileSize.x, this.tileSize.y,  // Source coordinates from sprite (first tile)
                    pos.x, pos.y, this.tileSize.x, this.tileSize.y  // Destination position and size
                );
            }
        }

        // Continue the rendering loop
        requestAnimationFrame(() => this.render());
    }

    // Function to convert hex coordinates to pixel coordinates
    private hexToPixel(hex: Vector): Vector {
        const x = hex.x * this.hexWidth + (hex.y % 2) * (this.hexWidth / 2);  // Offset every other row
        const y = hex.y * this.hexOffset;  // Stagger the rows
        return new Vector(x, y);
    }
}
