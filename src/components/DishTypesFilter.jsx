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

    const backward = () => {
        ref.current.scrollLeft -= ref.current.scrollWidth / [...set].length;
    };

    const forward = () => {
        ref.current.scrollLeft += ref.current.scrollWidth / [...set].length;
    };

    return (
        <div
            style={
                fixButtons
                    ? {
                          display: "flex",
                          justifyContent: "center",
                          margin: "20px 0",
                      }
                    : {}
            }
        >
            {fixButtons ? (
                <button
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        background: "#fff",
                        boxShadow: "0px 0px 2px #000",
                        borderRadius: "20px 0 0 20px",
                        padding: "5px",
                        margin: "0 10px 0 0",
                    }}
                    onClick={backward}
                >
                    &lt;&lt;
                </button>
            ) : null}
            <div
                ref={ref}
                className="dish__filter"
                style={
                    fixButtons
                        ? { justifyContent: "flex-start" }
                        : {
                              justifyContent: "space-around",
                              borderRadius: "20px",
                              margin: "20px auto",
                          }
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
            {fixButtons ? (
                <button
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        background: "#fff",
                        boxShadow: "0px 0px 2px #000",
                        borderRadius: "0 20px 20px 0",
                        padding: "5px",
                        margin: "0 0 0 10px",
                    }}
                    onClick={forward}
                >
                    &gt;&gt;
                </button>
            ) : null}
        </div>
    );
};
