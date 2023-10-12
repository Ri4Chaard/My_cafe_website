import React, { useState } from "react";
import "./styles/nullstyle.css";
import { DishList } from "./components/DishList";
import { DishForm } from "./components/DishForm";

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

    return (
        <div className="App">
            <DishForm
                items={dishes}
                set={dishesSet}
                type={dishType}
                name={dishName}
                setType={setDishType}
                setName={setDishName}
                setItems={setDishes}
            />
            <DishList set={dishesSet} items={dishes} />
        </div>
    );
}

export default App;
