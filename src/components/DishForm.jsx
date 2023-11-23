import React, { useState } from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton.jsx";
import { FormInput } from "./UI/input/FormInput.jsx";
import { FileInput } from "./UI/input/FileInput.jsx";

export const DishForm = ({ create }) => {
    const [dish, setDish] = useState({
        type: "",
        name: "",
        description: "",
        weight: "",
        price: "",
        image: {},
    });

    const [checker, setChecker] = useState(false);

    const addNewDish = (e) => {
        e.preventDefault();
        const newDish = {
            ...dish,
            id: Date.now(),
        };
        create(newDish);
        console.log(newDish);
        setDish({
            type: "",
            name: "",
            description: "",
            weight: "",
            price: "",
            image: {},
        });
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
                <FormInput
                    value={dish.description}
                    onChange={(e) =>
                        setDish({ ...dish, description: e.target.value })
                    }
                    type="input"
                    placeholder="Введите описание блюда"
                />
                <FormInput
                    value={dish.weight}
                    onChange={(e) =>
                        setDish({ ...dish, weight: e.target.value })
                    }
                    type="input"
                    placeholder="Введите вес блюда"
                />
                <FormInput
                    value={dish.price}
                    onChange={(e) =>
                        setDish({ ...dish, price: e.target.value })
                    }
                    type="input"
                    placeholder="Введите цену блюда (грн)"
                />
                <FileInput
                    accept=".png, .jpg"
                    checker={checker}
                    onChange={(e) => {
                        setChecker(true);
                        setDish({ ...dish, image: e.target.files[0] });
                    }}
                >
                    Выбрать картинку
                </FileInput>
                <ExecuteButton type="submit" onClick={addNewDish}>
                    Добавить
                </ExecuteButton>
            </form>
        </div>
    );
};
