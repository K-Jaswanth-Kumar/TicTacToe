import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combination"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INTIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O'
  }

  return currPlayer
}

function deriveWinner(gameBoard, players) {
  let winner
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }
  return winner
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INTIAL_GAME_BOARD.map((innerArr) => [...innerArr])]

  for (const turn of gameTurns) {
    const { square, player
    } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  return gameBoard
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  let currPlayer = deriveActivePlayer(gameTurns)

  let gameBoard = deriveGameBoard(gameTurns)


  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurn) => {
      const currPlayer = deriveActivePlayer(prevTurn)
      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currPlayer }, ...prevTurn]

      return updatedTurn
    })
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  const winner = deriveWinner(gameBoard, players)

  const hasDraw = gameTurns.length === 9 && !winner


  function handleRematch() {
    setGameTurns([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName={PLAYERS.X} symbol="X" isActive={currPlayer === 'X'} onSave={handlePlayerNameChange} />
          <Player intialName={PLAYERS.O} symbol="O" isActive={currPlayer === 'O'} onSave={handlePlayerNameChange} />

        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
