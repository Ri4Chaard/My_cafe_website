import React from "react";
import { DishItem } from "./DishItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const DishItems = ({ remove, ...props }) => {
    return (
        <TransitionGroup className="dish__items">
            {props.items.map((el) =>
                el.type == props.type ? (
                    <CSSTransition key={el.id} timeout={500} classNames="items">
                        <DishItem el={el} remove={remove} />
                    </CSSTransition>
                ) : null
            )}
        </TransitionGroup>
    );
};
