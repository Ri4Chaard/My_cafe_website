import React from "react";
import { DishItems } from "./DishItems";

export const DishList = ({ set, items }) => {
    return (
        <div>
            {Array.of(...set).map((type) => (
                <div
                    style={{
                        border: "1px solid #000",
                        marginTop: 15,
                    }}
                >
                    <h1>{type}</h1>
                    <DishItems items={items} type={type} />
                </div>
            ))}
        </div>
    );
};
