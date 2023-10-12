import React from "react";
import { DishItem } from "./DishItem";

export const DishItems = (props) => {
    return (
        <div>
            {props.items.map((el) =>
                el.type == props.type ? <DishItem props={el} /> : <div></div>
            )}
        </div>
    );
};
