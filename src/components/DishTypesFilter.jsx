import React, { useEffect, useRef, useState } from "react";
import classes from "./DishTypesFilter.module.css";

export const DishTypesFilter = ({ set, filter, chooser }) => {
    const [fixButtons, setFixButtons] = useState(false);
    const ref = useRef(0);

    useEffect(() => {
        console.log("worked");
        if (ref.current.scrollWidth > ref.current.offsetWidth)
            setFixButtons(true);
        else setFixButtons(false);
    }, [[...set].length]);

    console.log(ref);

    return (
        <div
            ref={ref}
            className="dish__filter"
            style={
                fixButtons
                    ? { justifyContent: "flex-start" }
                    : { justifyContent: "space-around" }
            }
        >
            {[...set].map((type) =>
                filter == type ? (
                    <button
                        className={classes.filterBtn_active}
                        key={type}
                        value={type}
                        onClick={chooser}
                    >
                        {type}
                    </button>
                ) : (
                    <button
                        className={classes.filterBtn}
                        key={type}
                        value={type}
                        onClick={chooser}
                    >
                        {type}
                    </button>
                )
            )}
        </div>
    );
};
