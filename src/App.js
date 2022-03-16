import React from "react";
import GameHeader from "./game-screen-components/GameHeader";
import GridCircle from "./game-setup-components/GridCircle";
// import GameSetup from './game-setup-components/GameSetup';

function App() {
  const gridCircles = [];
  for (let i=0; i<36; i++){
    gridCircles.push(<GridCircle/>)
  }
  return (
    <div className="App">
      {/* <GameSetup/> */}
      <div className="game-container">
        <div className="game">
          <GameHeader/>
          <div className="game-grid game-grid-6x6">
            {gridCircles}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
