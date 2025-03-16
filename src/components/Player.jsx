import { useState } from "react"

export default function Player({ intialName, symbol, isActive, handlePlayerNameChange }) {
    const [playerName, setPlayerName] = useState(intialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing)
        if (isEditing) {
            handlePlayerNameChange(symbol, playerName)
        }
    }

    function handleChange(e) {
        setPlayerName(e.target.value)
    }

    let editablePlayerName = <span className="player-name"> {playerName} </span>

    if (isEditing) {
        editablePlayerName = <input className="player-name" required value={playerName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">
                    {symbol}
                </span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    )
}