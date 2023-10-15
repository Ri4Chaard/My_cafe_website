import React from "react";
import { DishItem } from "./DishItem";

export const DishItems = ({ remove, ...props }) => {
    return (
        <div className="dish__items">
            {props.items.map((el) => {
                if (el.type == props.type)
                    return <DishItem key={el.id} el={el} remove={remove} />;
            })}
        </div>
    );
};
