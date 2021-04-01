import styles from "./navPanel.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestionCircle, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import { resumeAction } from "../reducers/controlSlice";
import { useHistory } from "react-router";
import { muteBGM, MUTED, playBGM, selectIsPlaying, stopBGM, TO_MUTE, unmuteBGM } from "../reducers/backgroundMusicSlice";
import { CONFIRM_WINDOW, disableBigPopUpPresense, enableBigPopUpIsToOpen, HELPER_WINDOW } from "../reducers/popUpWindowSlice";
import BigPopUpWindow from "./BigPopUpWindow";
import background from '../images/bigWindowBackground.png'
import HelperPage from "./HelperPage";
import { useState } from "react";

function HelperPageWindow() {
    const dispatch = useDispatch();
    const buttons = (<div onClick={() => {
        dispatch(disableBigPopUpPresense());
        dispatch(resumeAction());
    }}>I see!</div>);
    return (
        <BigPopUpWindow buttons={buttons} background={background} openType={HELPER_WINDOW}>
            <h1>Quick Guide</h1>
            <HelperPage />
        </BigPopUpWindow>
    );
}

function GobackConfirm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const buttons = (
        <>
            <div onClick={() => {
                dispatch(stopBGM());
                dispatch(disableBigPopUpPresense());
                dispatch(resumeAction());
                history.push("");
            }}>Yes</div>
            <div onClick={() => {
                dispatch(disableBigPopUpPresense());
                dispatch(resumeAction());
            }}>No</div>
        </>);
    return (
        <BigPopUpWindow buttons={buttons} background={background} openType={CONFIRM_WINDOW}>
            <h1>Are you sure?</h1>
            <div>You are going back to welcome page, all your current game progess will be lost, are you sure?</div>
        </BigPopUpWindow>
    );
}

export function NavPanel({ }) {
    const isPlayingBGM = useSelector(selectIsPlaying);
    const dispatch = useDispatch();
    const handleGoHome = () => {
        //history.push("");
        //dispatch(stopBGM());
        dispatch(enableBigPopUpIsToOpen(CONFIRM_WINDOW));
    };
    const handleHelperPage = () => {
        dispatch(enableBigPopUpIsToOpen(HELPER_WINDOW));
    }
    const handleMute = () => {
        if (isPlayingBGM === MUTED || isPlayingBGM === TO_MUTE) {
            dispatch(unmuteBGM());
        } else {
            dispatch(muteBGM());
        }
    }

    return (
        <>
            <HelperPageWindow />
            <GobackConfirm />
            <div className={styles.navPanelContainer}>
                <FontAwesomeIcon className={styles.icon} icon={faHome} onClick={() => { handleGoHome(); }} />
                <FontAwesomeIcon className={styles.icon} icon={faQuestionCircle} onClick={() => { handleHelperPage(); }} />
                <FontAwesomeIcon className={styles.icon} icon={(isPlayingBGM === MUTED || isPlayingBGM === TO_MUTE) ? faVolumeMute : faVolumeUp} onClick={() => { handleMute(); }} />
            </div>
        </>
    )
}
