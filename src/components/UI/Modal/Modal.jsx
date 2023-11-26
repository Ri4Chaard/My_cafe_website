import React from "react";
import classes from "./Modal.module.css";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const Modal = ({ children, visible, setVisible }) => {
    const rootClasses = [classes.modal];
    const windowWidth = useWindowSize(window.innerWidth);
    if (visible) {
        rootClasses.push(classes.active);
        document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    return (
        <div
            className={rootClasses.join(" ")}
            onClick={() => setVisible(!visible)}
        >
            <div
                className={classes.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                {windowWidth <= 1024 ? (
                    <div
                        className={classes.modalCloseBtn}
                        onClick={() => {
                            setVisible(!visible);
                        }}
                    >
                        Закрити
                    </div>
                ) : null}
            </div>
        </div>
    );
};
