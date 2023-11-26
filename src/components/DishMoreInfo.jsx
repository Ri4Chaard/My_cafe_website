import React from "react";
import img404 from "../img/img404.png";
import { ExecuteButton } from "./UI/button/ExecuteButton";
import "../styles/style.css";

export const DishMoreInfo = ({ dish }) => {
    return (
        <div className="dishModal">
            <div className="dishModal__item">
                <h1 className="dishModal__header">{dish.type}</h1>
                {dish.image.name ? (
                    <img
                        src={URL.createObjectURL(dish.image)}
                        alt="Image not found"
                        className="dishModal__item_image"
                    />
                ) : (
                    <div className="dish__item_not-found">
                        <img src={img404} alt="Image not found" />
                        <span>Image not found</span>
                    </div>
                )}
            </div>
            <div className="dishModal__item">
                <div className="dishModal__item_name">{dish.name}</div>
                <div className="dishModal__item_description">
                    {"Описание: "}
                    <br></br>
                    {dish.description}
                </div>
                <div className="dishModal__item_description">
                    {`Вес: ${dish.weight}`}
                </div>
                <div className="dishModal__item_price">
                    {`Цена: ${dish.price} грн`}
                </div>
                <div className="dishModal__item_btn">
                    <ExecuteButton style={{ backgroundColor: "#FFD700" }}>
                        {`Добавить к заказу за ${dish.price} грн`}
                    </ExecuteButton>
                </div>
            </div>
        </div>
    );
};
