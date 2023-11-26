import React, { useContext, useEffect, useState } from "react";
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
import { DishMoreInfo } from "../components/DishMoreInfo";

export const Menu = () => {
    const { login, setLogin } = useContext(AuthContext);

    const [dishes, setDishes] = useState(
        localStorage.getItem("products")
            ? JSON.parse(localStorage.getItem("products"))
            : []
    );
    const [filter, setFilter] = useState("");
    const [isActiveFilter, setActiveFilter] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [modalDish, setModalDish] = useState(false);
    const [selectedDish, setSelectedDish] = useState("");

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify([...dishes]));
    }, [dishes]);

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
                        +Додати страву
                    </ExecuteButton>
                ) : null}
                {dishes ? (
                    <DishTypesFilter
                        set={dishesSet}
                        filter={filter}
                        chooser={chooseDish}
                    />
                ) : null}
                {dishesSet.size != 0 ? (
                    <DishList
                        set={filteredDishes}
                        items={dishes}
                        view={viewDish}
                        remove={removeDish}
                    />
                ) : (
                    <div
                        style={{
                            fontSize: "48px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        На даний момент список порожній
                    </div>
                )}
            </div>
            <Modal visible={modalForm} setVisible={setModalForm}>
                <DishForm create={createDish} />
            </Modal>
            {modalDish ? (
                <Modal visible={modalDish} setVisible={setModalDish}>
                    <DishMoreInfo dish={selectedDish} />
                </Modal>
            ) : null}
        </Container>
    );
};
