import React from "react";
import { DishItems } from "./DishItems";

export const DishList = ({ set, items, remove }) => {
    return (
        <div>
            {Array.of(...set).map((type) => (
                <div className="dish__list" key={type}>
                    <h1>{type}</h1>
                    <DishItems items={items} type={type} remove={remove} />
                </div>
            ))}
        </div>
    );
};
