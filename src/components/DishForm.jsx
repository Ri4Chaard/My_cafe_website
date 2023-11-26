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
                    placeholder="Введіть страву"
                />
                <FormInput
                    value={dish.name}
                    onChange={(e) => setDish({ ...dish, name: e.target.value })}
                    type="input"
                    placeholder="Введіть назву страви"
                />
                <FormInput
                    value={dish.description}
                    onChange={(e) =>
                        setDish({ ...dish, description: e.target.value })
                    }
                    type="input"
                    placeholder="Введіть опис страви"
                />
                <FormInput
                    value={dish.weight}
                    onChange={(e) =>
                        setDish({ ...dish, weight: e.target.value })
                    }
                    type="input"
                    placeholder="Введіть вагу страви"
                />
                <FormInput
                    value={dish.price}
                    onChange={(e) =>
                        setDish({ ...dish, price: e.target.value })
                    }
                    type="input"
                    placeholder="Введіть ціну страви (грн)"
                />
                <FileInput
                    accept=".png, .jpg"
                    checker={checker}
                    onChange={(e) => {
                        setChecker(true);
                        setDish({ ...dish, image: e.target.files[0] });
                    }}
                >
                    Обрати світлину
                </FileInput>
                <ExecuteButton type="submit" onClick={addNewDish}>
                    Додати
                </ExecuteButton>
            </form>
        </div>
    );
};
