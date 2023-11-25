import React from "react";
import classes from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible }) => {
    const rootClasses = [classes.modal];
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
            </div>
        </div>
    );
};
