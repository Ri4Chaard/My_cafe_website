import React from "react";
import classes from "./ArrowButton.module.css";

export const ArrowButton = ({ children, arrow, ...props }) => {
    return children == "left" ? (
        <button {...props} className={classes.arrBtn_left}>
            &lt;&lt;
        </button>
    ) : children == "right" ? (
        <button {...props} className={classes.arrBtn_right}>
            &gt;&gt;
        </button>
    ) : (
        <button {...props} className={classes.arrBtn}>
            {children}
        </button>
    );
};
