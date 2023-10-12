import React from "react";
import { ExecuteButton } from "./UI/button/ExecuteButton.jsx";
import { FormInput } from "./UI/input/FormInput.jsx";

export const DishForm = (props) => {
    // const [dish, setDishes] = useState([
    //     { type: "Sushi", name: "Dragon" },
    //     { type: "Sushi", name: "Japanese" },
    //     { type: "Pizza", name: "Mozarella" },
    //     { type: "Borzsh", name: "Zvichainiy" },
    // ])

    const addNewDish = (e) => {
        e.preventDefault();
        const newDish = {
            type: props.type,
            name: props.name,
        };
        props.setItems([...props.items, newDish]);
        props.set.add(newDish.type);
    };

    return (
        <div>
            <form>
                <FormInput
                    value={props.type}
                    onChange={(e) => props.setType(e.target.value)}
                    type="input"
                    placeholder="Введите блюдо"
                />
                <FormInput
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                    type="input"
                    placeholder="Введите название блюда"
                />
                <ExecuteButton type="submit" onClick={addNewDish}>
                    Добавить
                </ExecuteButton>
            </form>
            <div>{`The type is: ${props.type}. The name is: ${props.name}`}</div>
        </div>
    );
};
