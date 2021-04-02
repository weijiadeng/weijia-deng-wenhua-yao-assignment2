import React from "react";
import styles from "../containers/guide.module.css";

const GameModeDescription = () => {
  return (
    <div className={styles.description}>
      <h3 className={styles.smallHeader}>Game mode</h3>
      <ul className={styles.list}>
        <li>
          <span className={styles.gameModeName}>Easy mode:</span>
          <br />
          Maze size is 5 X 5, while Minimap is always on, slow mode and dark
          mode is always off.
        </li>
        <li>
          <span className={styles.gameModeName}>Medium mode:</span>
          <br />
          Maze size is 10 X 10, and you have chances to meet all kinds of
          events.
        </li>
        <li>
          <span className={styles.gameModeName}>Hard mode</span>
          <br />
          Maze size is 15 X 15, and dark mode is always on. Strong wind will
          clear all effects except dark mode.
        </li>
        <li>
          <span className={styles.gameModeName}>Pure Maze mode</span>
          <br />
          Maze size is 20 X 20, no random events, no time limits and hp
          limits, you can toggle on/off dark mode and minimap at any time. This
          is to offer a pure maze wondering pleasure.
        </li>
      </ul>
    </div>
  );
};

export default GameModeDescription;