export class Sprite {
    private image: HTMLImageElement;

    constructor(imagePath: string) {
        this.image = new Image();
        this.image.src = imagePath;

        // Log or handle loading errors
        this.image.onload = () => {
            console.log("Sprite image loaded successfully");
        };
        this.image.onerror = () => {
            console.error("Failed to load sprite image");
        };
    }

    // Method to draw a tile from the sprite sheet
    public drawTile(
        ctx: CanvasRenderingContext2D,
        srcX: number, srcY: number, width: number, height: number,
        destX: number, destY: number
    ) {
        ctx.drawImage(
            this.image,
            srcX, srcY, width, height,  // Source rectangle (from sprite sheet)
            destX, destY, width, height  // Destination on the canvas
        );
    }
}
