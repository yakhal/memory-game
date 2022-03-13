import { useState } from "react";
import FormField from "./FormField";
import "./GameSetup.css";

function GameSetup() {
    const [gameSettings, setGameSettings] = useState({
        theme: "numbers",
        players: 1,
        gridSize: 4
    });

    const setThemeHandler = (index) => {
        const themes = ["numbers", "icons"];
        setGameSettings((prevState) => {
            return {
                ...prevState,
                theme: themes[index]
            };
        });
    }

    const setPlayersHandler = (index) => {
        const players = [1, 2, 3, 4];
        setGameSettings((prevState) => {
            return {
                ...prevState,
                players: players[index]
            };
        });
    }

    const setGridSizeHandler = (index) => {
        const gridSize = [4, 6]
        setGameSettings((prevState) => {
            return {
                ...prevState,
                gridSize: gridSize[index]
            };
        });
    }

    const onSubmitHandler = () => {
        console.log(gameSettings);
    }

    return (
        <div className="game-setup-container">
            <div className="game-setup">
                <header><h1 className='game-name'>memory</h1></header>
                <div className="game-options">
                    <FormField configure={setThemeHandler} fieldLabel={"Select Theme"} values={["numbers", "icons"]} />
                    <FormField configure={setPlayersHandler} fieldLabel={"Number of Players"} values={["1", "2", "3", "4"]} />
                    <FormField configure={setGridSizeHandler} fieldLabel={"Grid Size"} values={["4x4", "6x6"]} />
                    <button onClick={onSubmitHandler} className="start-game-button">Start Game</button>
                </div>
            </div>
        </div>
    );
}

export default GameSetup;