import React, { useEffect, useState } from "react";
import "./styles/nullstyle.css";

function App() {
    const [dishType, setDishType] = useState("");
    const [dishName, setDishName] = useState("");

    const [dishes, setDishes] = useState([
        { type: "Sushi", name: "Dragon" },
        { type: "Sushi", name: "Japanese" },
        { type: "Pizza", name: "Mozarella" },
        { type: "Borzsh", name: "Zvichainiy" },
    ]);

    const dishesSet = new Set();
    dishes.map((el) => dishesSet.add(el.type));

    const addNewDish = (e) => {
        e.preventDefault();
        const newDish = {
            type: dishType,
            name: dishName,
        };
        setDishes(
            [...dishes, newDish]
            // .sort((a, b) => a.type.localeCompare(b.type))
        );
        dishesSet.add(newDish.type);
        console.log(dishes);
        console.log(dishesSet);
    };

    return (
        <div className="App">
            <form>
                <input
                    value={dishType}
                    onChange={(e) => setDishType(e.target.value)}
                    type="input"
                    placeholder="Введите блюдо"
                />
                <input
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                    type="input"
                    placeholder="Введите название блюда"
                />
                <button type="submit" onClick={addNewDish}>
                    Добавить
                </button>
            </form>
            <div>{`The type is: ${dishType}. The name is: ${dishName}`}</div>

            {Array.of(...dishesSet).map((dishType) => (
                <div
                    style={{
                        border: "1px solid #000",
                        marginTop: 15,
                    }}
                >
                    <h1>{dishType}</h1>
                    {dishes.map((dish) =>
                        dish.type == dishType ? (
                            <div>{dish.name}</div>
                        ) : (
                            <div></div>
                        )
                    )}
                </div>
            ))}
        </div>
    );
}

export default App;
