import React, { useEffect, useState } from "react";
import "./styles/nullstyle.css";
import "./styles/style.css";
import { DishList } from "./components/DishList";
import { DishForm } from "./components/DishForm";
import { ExecuteButton } from "./components/UI/button/ExecuteButton";
import { DishTypesFilter } from "./components/DishTypesFilter";

function App() {
    // const [dishType, setDishType] = useState("");
    // const [dishName, setDishName] = useState("");

    const [dishes, setDishes] = useState([
        { id: Date.now(), type: "Sushi", name: "Dragon", image: null },
        { id: Date.now() + 1, type: "Sushi", name: "Japanese", image: null },
        { id: Date.now() + 2, type: "Pizza", name: "Mozarella", image: null },
        { id: Date.now() + 3, type: "Borzsh", name: "Zvichainiy", image: null },
    ]);
    const [filter, setFilter] = useState("");
    const [isActiveFilter, setActiveFilter] = useState(false);

    const dishesSet = new Set();
    dishes.map((el) => dishesSet.add(el.type));

    const createDish = (newDish) => {
        setDishes([...dishes, newDish]);
        dishesSet.add(newDish.type);
    };

    const removeDish = (dish) => {
        setDishes(dishes.filter((d) => d.id !== dish.id));
    };

    const chooseDish = (e) => {
        if (!filter) {
            setFilter(e.target.value);
            console.log(e.target.scrollWidth);
            console.log(e.target.offsetLeft);
            e.target.scrollIntoView({ behavior: "smooth", inline: "center" });
            setActiveFilter(!isActiveFilter);
        }
        if (e.target.value == filter) {
            setActiveFilter(!isActiveFilter);
            setFilter("");
        } else {
            setFilter(e.target.value);
            e.target.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    };

    const filterDishes = () => {
        if (isActiveFilter) return [filter];
        else return dishesSet;
    };

    const filteredDishes = filterDishes();

    return (
        <div className="App">
            <div className="container">
                <div className="dish">
                    <DishForm create={createDish} />
                    <DishTypesFilter
                        set={dishesSet}
                        filter={filter}
                        chooser={chooseDish}
                    />
                    <DishList
                        set={filteredDishes}
                        items={dishes}
                        remove={removeDish}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
