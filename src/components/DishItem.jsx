import React from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton";
import sushiImg from "../img/rolls.jpg";

export const DishItem = (props) => {
    return (
        <div className="dish__item">
            {props.el.name}
            {props.el.image ? (
                <img
                    src={URL.createObjectURL(props.el.image)}
                    alt="Image not found"
                />
            ) : (
                <img src={sushiImg} alt="Image not found" />
            )}
            <ExecuteButton>Просмотреть</ExecuteButton>
            <ExecuteButton onClick={() => props.remove(props.el)}>
                Удалить
            </ExecuteButton>
        </div>
    );
};
