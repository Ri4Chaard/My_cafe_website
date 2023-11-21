import React, { useContext, useState } from "react";
import "../styles/nullstyle.css";
import "../styles/style.css";
import img404 from "../img/img404.png";
import { DishList } from "../components/DishList";
import { DishForm } from "../components/DishForm";
import { DishTypesFilter } from "../components/DishTypesFilter";
import { Container } from "../components/UI/container/Container";
import { Modal } from "../components/UI/Modal/Modal";
import { ExecuteButton } from "../components/UI/button/ExecuteButton";
import { AuthContext } from "../components/context";

export const Menu = () => {
    const { login, setLogin } = useContext(AuthContext);
    console.log(login);
    const [dishes, setDishes] = useState([
        {
            id: Date.now(),
            type: "Sushi",
            name: "Dragon",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam! At ipsam sunt corrupti cupiditate? Inventore, officiis cumque. Enim, quaerat.",
            weight: "xg",
            price: "X",
            image: null,
        },
        {
            id: Date.now() + 1,
            type: "Sushi",
            name: "Japanese",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam! At ipsam sunt corrupti cupiditate? Inventore, officiis cumque. Enim, quaerat.",
            weight: "xg",
            price: "X",
            image: null,
        },
        {
            id: Date.now() + 2,
            type: "Pizza",
            name: "Mozarella",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam! At ipsam sunt corrupti cupiditate? Inventore, officiis cumque. Enim, quaerat.",
            weight: "xg",
            price: "X",
            image: null,
        },
        {
            id: Date.now() + 3,
            type: "Borzsh",
            name: "Zvichainiy",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam! At ipsam sunt corrupti cupiditate? Inventore, officiis cumque. Enim, quaerat.",
            weight: "xg",
            price: "X",
            image: null,
        },
    ]);
    const [filter, setFilter] = useState("");
    const [isActiveFilter, setActiveFilter] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [modalDish, setModalDish] = useState(false);
    const [selectedDish, setSelectedDish] = useState("");

    const dishesSet = new Set();
    dishes.map((el) => dishesSet.add(el.type));

    const createDish = (newDish) => {
        setDishes([...dishes, newDish]);
        dishesSet.add(newDish.type);
        setModalForm(!modalForm);
    };

    const viewDish = (dish) => {
        setSelectedDish(dish);
        setModalDish(true);
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
        <Container>
            <div className="dish">
                {login == "admin" ? (
                    <ExecuteButton onClick={() => setModalForm(!modalForm)}>
                        +Добавить блюдо
                    </ExecuteButton>
                ) : null}
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
            <Modal visible={modalForm} setVisible={setModalForm}>
                <DishForm create={createDish} />
            </Modal>
            <Modal visible={modalDish} setVisible={setModalDish}>
                <div className="dishModal">
                    <div className="dishModal__item">
                        <h1 style={{ margin: "0 0 20px 0" }}>
                            {selectedDish.type}
                        </h1>
                        {selectedDish.image ? (
                            <img
                                src={URL.createObjectURL(selectedDish.image)}
                                alt="Image not found"
                                className="dishModal__item_image"
                            />
                        ) : (
                            <div className="dish__item_not-found">
                                <img src={img404} alt="Image not found" />
                                <span>Image not found</span>
                            </div>
                        )}
                    </div>
                    <div className="dishModal__item">
                        <div style={{ margin: "0 0 30px 0" }}>
                            {selectedDish.name}
                        </div>
                        <div
                            style={{
                                fontSize: "16px",
                                fontStyle: "italic",
                            }}
                        >
                            {"Описание: "}
                            <br></br>
                            {selectedDish.description}
                        </div>
                        <div
                            style={{
                                fontSize: "16px",
                                fontStyle: "italic",
                            }}
                        >
                            {`Вес: ${selectedDish.weight}`}
                        </div>
                        <div style={{ fontSize: "24px" }}>
                            {`Цена: ${selectedDish.price} грн`}
                        </div>
                        <div
                            style={{
                                fontSize: "24px",
                                alignSelf: "center",
                            }}
                        >
                            <ExecuteButton
                                style={{ backgroundColor: "#FFD700" }}
                            >
                                {`Добавить к заказу за ${selectedDish.price} грн`}
                            </ExecuteButton>
                        </div>
                    </div>
                </div>
            </Modal>
        </Container>
    );
};
