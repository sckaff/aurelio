# Aurelio - Web-Based Turn-Based Pixel Art Game

Aurelio is a **single-player, web-based turn-based game** built with **TypeScript** and **Go**. It features pixel art visuals and a simple but engaging gameplay experience.

This project is designed to be part of my portfolio, showcasing my skills in full-stack development, with the **TypeScript** frontend and **Go** backend working together seamlessly.

## Features

- **Pixel Art Style**: A nostalgic visual aesthetic with simple, charming pixel art.
- **Turn-Based Gameplay**: Players take turns making decisions, such as moving characters or performing actions.
- **Single-Player**: Designed for solo play, focusing on strategic decision-making.
- **Web-Based**: The game can be played directly from a browser.

## Technologies Used

- **Frontend**: TypeScript, HTML, CSS (using standard web technologies for the UI)
- **Backend**: Go (to handle game logic, turns, and player interactions)
- **Pixel Art**: Custom pixel art assets (can include a game board, characters, etc.)
- **Build Tools**: TypeScript Compiler (`tsc`), Go (used to serve the web page and handle game state)

## Setup

### Prerequisites

- **Go** (v1.x.x) - The Go runtime and tools are required to handle the backend of the game.
- **Node.js** & **npm** (optional, for frontend build)
- **TypeScript** installed (to compile the game logic)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/aurelio.git
cd aurelio
```

#### 2. Install the TypeScript dependencies

If you're using npm, navigate to the frontend folder and run:

```bash
npm install
```

Alternatively, you can run:

```bash
tsc
```

#### 3. Install Go dependencies (if any)

```bash
go mod tidy
```

### Running the Game Locally

#### 1. Compile the TypeScript files into JavaScript

```bash
tsc
```

#### 2. Run the Go server

```bash
go run .
```

#### 3. Open your browser and navigate to ```http://localhost:8080``` (or the appropriate port as defined in your Go code)

## Project Structure

```text
aurelio/
│
├── src/                # TypeScript source files
│   ├── game.ts         # Main game logic
│   └── ui.ts           # UI handling
│
├── assets/             # Pixel art assets
│   ├── sprites/        # Character and game piece sprites
│   └── tiles/          # Background and environment tiles
│
├── go/                 # Go source files
│   ├── main.go         # Go server entry point
│   └── gameLogic.go    # Game logic (turns, player, state)
│
└── index.html          # Main HTML file
```

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to the project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
