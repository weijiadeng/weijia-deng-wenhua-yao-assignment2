import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStatus,
  countUp,
  resumeCount,
  READY,
  selectIntervalHasSet,
  markIntervalSet,
  selectCurNumSeconds,
  selectTimeout,
} from "../reducers/elapseTimerSlice";
import { setTimeUsedUp } from "../reducers/playerStatusSlice";
import styles from "./elapseTimer.module.css";

// A timer recording elapse time.
export default function ElapseTimer({ mode }) {
  const status = useSelector(selectStatus);
  const intervalHasSet = useSelector(selectIntervalHasSet);
  const dispatch = useDispatch();
  const timeOut = useSelector(selectTimeout);
  const x = useSelector(selectCurNumSeconds);

  const handleCountUpDispatch = () => {
    dispatch(countUp());
  };
  useEffect(() => {
    if (status === READY) {
      dispatch(resumeCount());
      if (!intervalHasSet) {
        setInterval(handleCountUpDispatch, 1000);
        dispatch(markIntervalSet());
      }
    }
    if (x > timeOut) {
      dispatch(setTimeUsedUp());
    }  
  });


  // Only show detailed time count in pure mode
  return mode === "pure" ? (
    <div className={styles.timer}>
      Time elapsed:{" "}
      <span className={styles.number}>{Math.floor(x / 3600)}</span> H{" "}
      <span className={styles.number}>{Math.floor(x / 60)} </span> M{" "}
      <span className={styles.number}>{x % 60} </span> S{" "}
    </div>
  ) : (
    <></>
  );
}
