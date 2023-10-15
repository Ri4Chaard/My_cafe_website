import React from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton";

export const DishItem = (props) => {
    return (
        <div>
            {props.el.name}
            <ExecuteButton>Просмотреть</ExecuteButton>
            <ExecuteButton onClick={() => props.remove(props.el)}>
                Удалить
            </ExecuteButton>
        </div>
    );
};
