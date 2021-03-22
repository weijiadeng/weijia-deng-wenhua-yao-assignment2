import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disablePresense, enablePresense, selectPresense, selectIsToOpen, disableIsToOpen } from '../reducers/smallPopUpWindowSlice';
import styles from './bigPopUpWindow.module.css'
import Modal from "react-modal"
import { pauseCount, resumeCount } from '../reducers/elapseTimerSlice';
import { occurEvent, popEvent } from '../reducers/controlSlice';

const BigPopUpWindow = (props) => {
    const dispatch = useDispatch();
    const isToOpen = useSelector(selectIsToOpen)
    useEffect(() => {
        if (isToOpen) {
            dispatch(enablePresense());
            dispatch(occurEvent());
            dispatch(disableIsToOpen());
        }
    });

    const isOpen = useSelector(selectPresense);
    useEffect(() => {
        if (isOpen) {
            dispatch(pauseCount());
        }
    });

    return (
        <Modal
            isOpen={isOpen}
            className={styles.popup}
            overlayClassName={styles.overlay}
            closeTimeoutMS={1000}>
            <img src={props.background} className={styles.backgroundPic} alt={""} />

            <div className={styles.content}>

                {props.children}
                <div className={styles.buttonsection}>
                    {props.buttons}
                </div>
            </div>
        </Modal>
    );
}

export default BigPopUpWindow;