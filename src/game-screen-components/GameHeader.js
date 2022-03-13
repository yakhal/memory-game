import { useState } from "react";
import Modal from "../utility-components/Modal";

function GameHeader() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <header className="game-header">
      <h1 className="game-name">memory</h1>
      <button
        className="game-screen-button orange menu-button"
        onClick={showModalHandler}
      >
        Menu
      </button>
      <div className="button-group">
        <button className="game-screen-button orange">Restart</button>
        <button className="game-screen-button">New Game</button>
      </div>
      {showModal && (
        <Modal>
          <button className="game-screen-button orange">Restart</button>
          <button className="game-screen-button">New Game</button>
          <button className="game-screen-button" onClick={showModalHandler}>
            Resume Game
          </button>
        </Modal>
      )}
    </header>
  );
}

export default GameHeader;
