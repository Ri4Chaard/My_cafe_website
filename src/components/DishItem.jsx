import React from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton";
import img404 from "../img/img404.png";

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
                <div className="dish__item_not-found">
                    <img src={img404} alt="Image not found" />
                    <span>Image not found</span>
                </div>
            )}
            <ExecuteButton>Просмотреть</ExecuteButton>
            <ExecuteButton onClick={() => props.remove(props.el)}>
                Удалить
            </ExecuteButton>
        </div>
    );
};
