import React from "react";
import { DishItem } from "./DishItem";

export const DishItems = ({ remove, ...props }) => {
    return (
        <div>
            {props.items.map((el) =>
                el.type == props.type ? (
                    <DishItem el={el} remove={remove} />
                ) : (
                    <div></div>
                )
            )}
        </div>
    );
};
