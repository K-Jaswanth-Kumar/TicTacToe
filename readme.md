# React Tic-Tac-Toe

A simple, classic Tic-Tac-Toe game built with **React** and **Vite**. This project demonstrates fundamental React concepts such as component composition, state management, and props usage. It also includes an interactive UI for player name editing, turn logging, and a rematch feature.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Two-Player Support**: Player X and Player O alternate turns.
- **Player Name Editing**: Each player can edit and save their display name.
- **Turn Logging**: A log displays all moves as they happen.
- **Win Detection**: The game automatically detects when a player has won.
- **Draw Detection**: Detects and displays a draw if all squares are filled with no winner.
- **Rematch Button**: Quickly reset the board and start a new game.

---

## Project Structure

```
k-jaswanth-kumar-tictactoe/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── game-logo.png
└── src/
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    ├── winning-combination.js
    ├── assets/
    └── components/
        ├── GameBoard.jsx
        ├── GameOver.jsx
        ├── Log.jsx
        └── Player.jsx
```

- **index.html**  
  The main HTML file that sets up the basic page structure. It references the bundled JavaScript and includes a placeholder for the React app.

- **package.json**  
  Contains project metadata and scripts for development and build tasks.

- **vite.config.js**  
  Vite configuration for bundling and development server.

- **public/**  
  Contains static assets like the game logo.

- **src/**
  - **App.jsx**: The root component orchestrating the overall app logic (manages state, determines current player, detects winners/draws, etc.).
  - **index.jsx**: The entry point where ReactDOM renders the `App` component into the `root` div.
  - **index.css**: Global CSS and styles imported into the application.
  - **winning-combination.js**: Defines the possible winning configurations for Tic-Tac-Toe.
  - **assets/**: A place to store images, icons, or other media assets (if any).
  - **components/**:
    - **GameBoard.jsx**: Renders the Tic-Tac-Toe board and handles clicks on each square.
    - **GameOver.jsx**: Displays the “Game Over” overlay, announcing a winner or a draw, and provides a rematch button.
    - **Log.jsx**: Renders the turn log, showing each move made by each player.
    - **Player.jsx**: Handles individual player name editing, symbol display, and active-player highlighting.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository** (or download the zip):
   ```bash
   git clone https://github.com/your-username/k-jaswanth-kumar-tictactoe.git
   ```
2. **Navigate into the project folder**:
   ```bash
   cd k-jaswanth-kumar-tictactoe
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## Usage

### Development Server

Run the development server with hot module replacement:

```bash
npm run dev
```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser (the port may vary, check your terminal after running the command).

### Production Build

To create an optimized production build:

```bash
npm run build
```

This will generate a production-ready bundle in the `dist` folder.

### Preview Production Build

You can also preview the production build locally:

```bash
npm run preview
```

Then open the provided URL (often [http://localhost:4173/](http://localhost:4173/)) in your browser.

---

## How It Works

1. **Board Rendering**: The `GameBoard.jsx` component renders a 3x3 grid of squares. Each square is a button that, when clicked, triggers the `onSelectSquare` callback passed from `App.jsx`.

2. **Game State**:

   - `App.jsx` stores the history of `gameTurns`. Each turn contains:
     ```js
     {
       square: { row, col },
       player: 'X' or 'O'
     }
     ```
   - We derive the current player by checking the game log: if the last move was `X`, the new move is `O`, and vice versa.

3. **Win/Draw Detection**:

   - `App.jsx` uses `WINNING_COMBINATIONS` to compare each row, column, or diagonal to see if a single player occupies all three squares.
   - If no winner is found by the time 9 moves have been played, it’s a draw.

4. **Rematch**: The `GameOver` component appears when there’s a winner or a draw. Clicking **Rematch!** resets the `gameTurns` state, clearing the board.

5. **Player Name Editing**: In `Player.jsx`, clicking **Edit** toggles an input field to rename the player. Clicking **Save** will update the name in the parent state (`App.jsx`).

---
