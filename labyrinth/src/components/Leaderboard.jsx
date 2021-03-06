import React from "react";
import { useSelector } from "react-redux";
import { selectList } from "../reducers/leaderboardSlice";
import styles from "./leaderboard.module.css";

// Show each row of the leaderboard
function LeaderboardRow({ time, index }) {
  return (
    <div className={styles.leaderRow}>
      <span className={styles.order}>{index + 1}.</span>
      <span key={index} className={styles.entry}>
        {Math.floor(time / 3600)} H {Math.floor(time / 60)} M {time % 60} S
      </span>
    </div>
  );
}

// Show the leaderboard section in the popup window
export default function LearderboardSection({ mode }) {
  const leaderList = useSelector(selectList);
  return (
    <React.Fragment>
      <h1>Leaderboard for {mode} mode</h1>
      <div className={styles.leaderSection}>
        {leaderList[mode].map((x, index) => (
          <LeaderboardRow key={index} index={index} time={x} />
        ))}
      </div>
    </React.Fragment>
  );
}
