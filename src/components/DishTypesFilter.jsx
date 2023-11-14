import React, { useEffect, useRef, useState } from "react";
import { FilterButton } from "./UI/button/filter_buttons/dish_type_buttons/FilterButton";
import { ArrowButton } from "./UI/button/filter_buttons/arrow_buttons/ArrowButton";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const DishTypesFilter = ({ set, filter, chooser }) => {
    const [fixButtons, setFixButtons] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const ref = useRef(0);

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (ref.current.scrollWidth > ref.current.offsetWidth)
            setFixButtons(true);
        else setFixButtons(false);
    }, [windowWidth, [...set].length]);

    const backward = () => {
        ref.current.scrollLeft -= ref.current.scrollWidth / [...set].length;
    };

    const forward = () => {
        ref.current.scrollLeft += ref.current.scrollWidth / [...set].length;
    };

    return (
        <div
            style={
                fixButtons && windowWidth > 482
                    ? {
                          display: "flex",
                          justifyContent: "center",
                          margin: "20px 0",
                      }
                    : null
            }
        >
            {fixButtons && windowWidth > 482 ? (
                <ArrowButton onClick={backward}>left</ArrowButton>
            ) : null}
            <div
                ref={ref}
                className="dish__filter"
                style={
                    fixButtons && windowWidth > 482
                        ? { justifyContent: "flex-start" }
                        : {
                              justifyContent: "space-around",
                              borderRadius: "20px",
                              margin: "20px auto",
                          }
                }
            >
                <TransitionGroup component={null}>
                    {[...set].map((type) =>
                        filter == type ? (
                            <CSSTransition
                                key={type}
                                timeout={500}
                                classNames="list"
                            >
                                <FilterButton
                                    active={true}
                                    key={type}
                                    value={type}
                                    onClick={chooser}
                                >
                                    {type}
                                </FilterButton>
                            </CSSTransition>
                        ) : (
                            <CSSTransition
                                key={type}
                                timeout={500}
                                classNames="list"
                            >
                                <FilterButton
                                    active={false}
                                    key={type}
                                    value={type}
                                    onClick={chooser}
                                >
                                    {type}
                                </FilterButton>
                            </CSSTransition>
                        )
                    )}
                </TransitionGroup>
            </div>
            {fixButtons && windowWidth > 482 ? (
                <ArrowButton onClick={forward}>right</ArrowButton>
            ) : null}
        </div>
    );
};
