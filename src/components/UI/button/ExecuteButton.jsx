import React from "react";
import classes from "./ExecuteButton.module.css";

export const ExecuteButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.executeBtn}>
            {children}
        </button>
    );
};
