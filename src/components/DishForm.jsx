import React, { useState } from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton.jsx";
import { FormInput } from "./UI/input/FormInput.jsx";
import { FileInput } from "./UI/input/FileInput.jsx";

export const DishForm = ({ create }) => {
    const [dish, setDish] = useState({ type: "", name: "", image: null });
    const [checker, setChecker] = useState(false);

    const addNewDish = (e) => {
        e.preventDefault();
        const newDish = {
            ...dish,
            id: Date.now(),
        };
        create(newDish);
        console.log(newDish);
        setDish({ type: "", name: "", image: null });
        setChecker(false);
    };

    return (
        <div>
            <form className="dish__form">
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
                <FileInput
                    accept=".png, .jpg"
                    checker={checker}
                    onChange={(e) => {
                        setDish({ ...dish, image: e.target.files[0] });
                        if (e.target.files[0]) setChecker(true);
                        else setChecker(false);
                    }}
                >
                    Выбрать картинку
                </FileInput>
                <ExecuteButton type="submit" onClick={addNewDish}>
                    Добавить
                </ExecuteButton>
            </form>
            <div>{`The type is: ${dish.type}. The name is: ${dish.name}`}</div>
        </div>
    );
};
