import React, { useState } from "react";
import "../styles/nullstyle.css";
import "../styles/style.css";
import { DishList } from "../components/DishList";
import { DishForm } from "../components/DishForm";
import { DishTypesFilter } from "../components/DishTypesFilter";
import { Container } from "../components/UI/container/Container";
import { Modal } from "../components/UI/Modal/Modal";
import { ExecuteButton } from "../components/UI/button/ExecuteButton";

function Menu() {
    const [dishes, setDishes] = useState([
        { id: Date.now(), type: "Sushi", name: "Dragon", image: null },
        { id: Date.now() + 1, type: "Sushi", name: "Japanese", image: null },
        { id: Date.now() + 2, type: "Pizza", name: "Mozarella", image: null },
        { id: Date.now() + 3, type: "Borzsh", name: "Zvichainiy", image: null },
    ]);
    const [filter, setFilter] = useState("");
    const [isActiveFilter, setActiveFilter] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [modalDish, setModalDish] = useState(false);

    const dishesSet = new Set();
    dishes.map((el) => dishesSet.add(el.type));

    const createDish = (newDish) => {
        setDishes([...dishes, newDish]);
        dishesSet.add(newDish.type);
        setModalForm(!modalForm);
    };

    const viewDish = (dish) => {
        console.log(dish);
    };

    const removeDish = (dish) => {
        setDishes(dishes.filter((d) => d.id !== dish.id));
    };

    const chooseDish = (e) => {
        if (!filter) {
            setFilter(e.target.value);
            e.target.scrollIntoView({ inline: "center" });
            setActiveFilter(!isActiveFilter);
        }
        if (e.target.value == filter) {
            setActiveFilter(!isActiveFilter);
            setFilter("");
        } else {
            setFilter(e.target.value);
            e.target.scrollIntoView({ inline: "center" });
        }
    };

    const filterDishes = () => {
        if (isActiveFilter) return [filter];
        else return dishesSet;
    };

    const filteredDishes = filterDishes();

    return (
        <main className="content">
            <Container>
                <div className="dish">
                    <ExecuteButton onClick={() => setModalForm(!modalForm)}>
                        Добавить блюдо +
                    </ExecuteButton>
                    <DishTypesFilter
                        set={dishesSet}
                        filter={filter}
                        chooser={chooseDish}
                    />
                    <DishList
                        set={filteredDishes}
                        items={dishes}
                        view={viewDish}
                        remove={removeDish}
                    />
                </div>
            </Container>
            <Modal visible={modalForm} setVisible={setModalForm}>
                <DishForm create={createDish} />
            </Modal>
            <Modal visible={modalDish} setVisible={setModalDish}></Modal>
        </main>
    );
}

export default Menu;
