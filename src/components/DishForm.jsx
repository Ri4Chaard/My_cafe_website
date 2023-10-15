import React, { useState } from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton.jsx";
import { FormInput } from "./UI/input/FormInput.jsx";

export const DishForm = ({ create }) => {
    const [dish, setDish] = useState({ type: "", name: "" });

    const addNewDish = (e) => {
        e.preventDefault();
        const newDish = {
            ...dish,
            id: Date.now(),
        };
        create(newDish);
    };

    return (
        <div>
            <form>
                <FormInput
                    value={dish.type}
                    onChange={(e) => setDish({ ...dish, type: e.target.value })}
                    type="input"
                    placeholder="Введите блюдо"
                />
                <FormInput
                    value={dish.name}
                    onChange={(e) => setDish({ ...dish, name: e.target.value })}
                    type="input"
                    placeholder="Введите название блюда"
                />
                <ExecuteButton type="submit" onClick={addNewDish}>
                    Добавить
                </ExecuteButton>
            </form>
            <div>{`The type is: ${dish.type}. The name is: ${dish.name}`}</div>
        </div>
    );
};
