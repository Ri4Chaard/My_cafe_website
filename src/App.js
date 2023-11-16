import React, { useState } from "react";
// import "./styles/nullstyle.css";
// import "./styles/style.css";
import "./styles/App.css";
import { DishList } from "./components/DishList";
import { DishForm } from "./components/DishForm";
import { DishTypesFilter } from "./components/DishTypesFilter";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import { About } from "./pages/About";
import { Container } from "./components/UI/container/Container";

function App() {
    return (
        <BrowserRouter>
            <header className="header">
                <Container>
                    <div className="header__items">
                        <div
                            style={{
                                fontSize: "36px",
                                color: "#fff",
                                padding: "5px",
                                backgroundColor: "#333333",
                            }}
                        >
                            LOGO HERE
                        </div>
                        <Link
                            to="/menu"
                            style={{
                                color: "#fff",
                                fontSize: "24px",
                                padding: "5px",
                                backgroundColor: "#333333",
                            }}
                        >
                            Меню
                        </Link>
                        <Link
                            to="/about"
                            style={{
                                color: "#fff",
                                fontSize: "24px",
                                padding: "5px",
                                backgroundColor: "#333333",
                            }}
                        >
                            О сайте
                        </Link>
                        <Link
                            to="/*"
                            style={{
                                color: "#fff",
                                fontSize: "24px",
                                padding: "5px",
                                backgroundColor: "#333333",
                            }}
                        >
                            Логин
                        </Link>
                        <Link
                            to="/*"
                            style={{
                                color: "#fff",
                                fontSize: "24px",
                                padding: "5px",
                                backgroundColor: "#333333",
                            }}
                        >
                            Корзина
                        </Link>
                    </div>
                </Container>
            </header>
            <Routes>
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/menu" replace />} />
            </Routes>
            <footer className="footer">
                <Container>
                    <div className="footer__items"></div>
                </Container>
            </footer>
        </BrowserRouter>
    );
}

export default App;
