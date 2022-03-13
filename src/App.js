import React from "react";
import GameHeader from "./game-screen-components/GameHeader";
// import GameSetup from './game-setup-components/GameSetup';

function App() {
  return (
    <div className="App">
      {/* <GameSetup/> */}
      <div className="game-container">
        <div className="game">
          <GameHeader/>
        </div>
      </div>
    </div>
  );
}

export default App;
