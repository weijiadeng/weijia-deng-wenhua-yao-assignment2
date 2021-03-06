import React from "react";
import { useSelector } from "react-redux";
import {
  DARK_MODE_OFF,
  MINI_MAP_ON,
  selectHP,
  SPEED_DOWN,
  SPEED_UP,
} from "../reducers/playerStatusSlice";
import styles from "./playerStatusPanel.module.css";
// Ref: https://iconarchive.com/show/love-is-in-the-web-icons-by-succodesign/heart-icon.html
import heart from "../images/heart-icon.png";
// Ref: https://commons.wikimedia.org/wiki/File:Stock_alarm.svg
import normalclock from "../images/normalclock.png";
// Ref: https://en.wikipedia.org/wiki/File:Out_of_date_clock_icon.svg
import outoftimeclock from "../images/outoftimeclock.png";
// Ref: https://www.subpng.com/png-6x43z7/
import mapicon from "../images/mapicon.png";
// Ref: https://www.flaticon.com/free-icon/sun_169367
import dayIcon from "../images/sun.png";
// Ref: https://www.flaticon.com/free-icon/night_208293
import nightIcon from "../images/night.png";
// Ref: https://www.flaticon.com/free-icon/rocket_1356479
import rocket from "../images/rocket.png";
// Ref: https://iconarchive.com/show/noto-emoji-animals-nature-icons-by-google/22283-turtle-icon.html
import turtleicon from "../images/turtleicon.png";
import { selectCurNumSeconds } from "../reducers/elapseTimerSlice";
import ElapseTimer from "./ElapseTimer";

// Ref: https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
const ProgressBar = (props) => {
  return (
    <div className={styles.progressBar}>
      <Filler percentage={props.percentage} color={props.color} />
    </div>
  );
};

const Filler = (props) => {
  return (
    <div
      className={styles.filler}
      style={{ width: `${props.percentage}%`, background: props.color }}
    />
  );
};

// Show the current player status in the gameplay view
const PlayerStatusPanel = ({ buff, debuff, timeout, mode }) => {
  const hp = useSelector(selectHP);
  const clock = (timeout - useSelector(selectCurNumSeconds)) / timeout * 100;
  return (
    <div className={styles.container}>
      {/* Pure mode does not have time and HP limits, so we do not display them */}
      {mode !== "pure" ? (
        <div className={styles.progressBarSection}>
          <img className={styles.icon} src={heart} alt="HP" />
          <ProgressBar percentage={hp} />{" "}
        </div>
      ) : (
        <></>
      )}
      {mode !== "pure" ? (
        <div className={styles.progressBarSection}>
          <img
            className={styles.icon}
            src={clock > 30 ? normalclock : outoftimeclock}
            alt="Remaining Time"
          />
          <ProgressBar percentage={clock} color="blue" />
        </div>
      ) : (
        <></>
      )}
      <ElapseTimer mode={mode} />
      <div className={styles.buffSection}>
        <img
          className={styles.icon}
          src={buff & DARK_MODE_OFF ? dayIcon : nightIcon}
          alt="day mode"
        />
        {buff & MINI_MAP_ON ? (
          <img className={styles.icon} src={mapicon} alt="minimap mode" />
        ) : null}
        {buff & SPEED_UP ? (
          <img className={styles.icon} src={rocket} alt="speed up" />
        ) : null}
        {debuff & SPEED_DOWN ? (
          <img className={styles.icon} src={turtleicon} alt="speed down" />
        ) : null}
      </div>
    </div>
  );
};

export default PlayerStatusPanel;
