import React from "react";
import { DishItems } from "./DishItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const DishList = ({ set, items, remove }) => {
    return (
        <TransitionGroup>
            {[...set].map((type) => (
                <CSSTransition key={type} timeout={500} classNames="list">
                    <div className="dish__list">
                        <h1>{type}</h1>
                        <DishItems items={items} type={type} remove={remove} />
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};
