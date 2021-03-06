import React from "react";
import GameModeDescription from "../components/GameModeDescription";
import styles from "./guide.module.css";
import movesGuide from "../images/movesGuide.png";
import MiniMapEventDescription from "../components/MiniMapEventDescription";
import DarkModeEventDescription from "../components/DarkModeEventDescription";
import SpeedChangeEventDescription from "../components/SpeedChangeEventDescription";
import HPChangeEventDescription from "../components/HPChangeEventDescription";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";

const Guide = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push("");
  };
  const goBack = "< Go Back";

  return (
    <div className={styles.guide}>
      <span
        className={`${styles.goBackButton} ${styles.topGoBackButton}`}
        onClick={() => handleGoBack()}
      >
        {goBack}
      </span>

      <div>
        <h2 className={styles.bigHeader}>
          Welcome! You have entered a dangerous maze !
        </h2>
        <span className={styles.plainText}>
          The purpose of the game is to find the exit.
        </span>
      </div>
      <div className={styles.description}>
        <h3 className={styles.smallHeader}> How to play:</h3>
        <ul className={styles.list}>
          <li>
            Use "W", "A", "S", "D" to move forward, left, backward, right.
          </li>
          <img className={styles.moveGuide} src={movesGuide} alt="move guide" />
        </ul>
      </div>

      <div className={styles.description}>
        <h3 className={styles.smallHeader}> Tips:</h3>
        <ul className={styles.list}>
          <li>
            During your exploration, your moves might invoke different kinds of
            effects. Some of them are helpful, some of them are not. :)
          </li>
          <li>Keep an eye on your HP! If your HP went to 0, you fail!</li>
          <li>Enjoy!</li>
          <li>
            Maybe you already know, but again, trying to go through the walls
            directly won't work!
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <h3 className={styles.smallHeader}>Effects you might invoke:</h3>
        <ul className={styles.list}>
          <li>
            <MiniMapEventDescription />
          </li>
          <li>
            <DarkModeEventDescription />
          </li>
          <li>
            <SpeedChangeEventDescription />
          </li>
          <li>
            <HPChangeEventDescription />
          </li>
        </ul>
      </div>
      <GameModeDescription />
      <span
        className={`${styles.goBackButton} ${styles.bottomGoBackButton}`}
        onClick={() => handleGoBack()}
      >
        {goBack}
      </span>
      <Footer />
    </div>
  );
};

export default Guide;
