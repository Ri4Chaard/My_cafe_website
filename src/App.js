import React, { useState } from "react";
import "./styles/nullstyle.css";
import { DishList } from "./components/DishList";
import { DishForm } from "./components/DishForm";

function App() {
    const [dishType, setDishType] = useState("");
    const [dishName, setDishName] = useState("");

    const [dishes, setDishes] = useState([
        { id: Date.now(), type: "Sushi", name: "Dragon" },
        { id: Date.now() + 1, type: "Sushi", name: "Japanese" },
        { id: Date.now() + 2, type: "Pizza", name: "Mozarella" },
        { id: Date.now() + 3, type: "Borzsh", name: "Zvichainiy" },
    ]);

    const dishesSet = new Set();
    dishes.map((el) => dishesSet.add(el.type));

    const createDish = (newDish) => {
        setDishes([...dishes, newDish]);
        dishesSet.add(newDish.type);
    };

    const removeDish = (dish) => {
        setDishes(dishes.filter((d) => d.id !== dish.id));
    };

    return (
        <div className="App">
            <DishForm create={createDish} />
            <DishList set={dishesSet} items={dishes} remove={removeDish} />
        </div>
    );
}

export default App;
