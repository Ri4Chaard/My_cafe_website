import React from "react";
import classes from "./FilterButton.module.css";

export const FilterButton = ({ children, active, ...props }) => {
    return (
        <button
            {...props}
            className={active ? classes.filterBtn_active : classes.filterBtn}
        >
            {children}
        </button>
    );
};
