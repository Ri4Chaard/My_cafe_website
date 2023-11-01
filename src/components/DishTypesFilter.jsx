import React, { useEffect, useRef, useState } from "react";
import { FilterButton } from "./UI/button/filter_buttons/dish_type_buttons/FilterButton";
import { ArrowButton } from "./UI/button/filter_buttons/arrow_buttons/ArrowButton";

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
                <ArrowButton onClick={backward}>left</ArrowButton>
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
                        <FilterButton
                            active={true}
                            key={type}
                            value={type}
                            onClick={chooser}
                        >
                            {type}
                        </FilterButton>
                    ) : (
                        <FilterButton
                            active={false}
                            key={type}
                            value={type}
                            onClick={chooser}
                        >
                            {type}
                        </FilterButton>
                    )
                )}
            </div>
            {fixButtons ? (
                <ArrowButton onClick={forward}>right</ArrowButton>
            ) : null}
        </div>
    );
};
