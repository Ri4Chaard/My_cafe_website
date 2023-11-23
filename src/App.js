import React, { useEffect, useState } from "react";
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
import { Login } from "./pages/Login";
import { AuthContext } from "./components/context";
import { AppRouter } from "./components/AppRouter";

function App() {
    const [login, setLogin] = useState("");

    useEffect(() => {
        if (localStorage.getItem("login"))
            setLogin(localStorage.getItem("login"));
    }, []);

    const logout = () => {
        setLogin("");
        localStorage.removeItem("login");
    };

    return (
        <AuthContext.Provider value={{ login, setLogin }}>
            <BrowserRouter>
                <header>
                    <Container>
                        <div className="header__items">
                            <div
                                style={{
                                    fontSize: "36px",
                                    color: "#fff",
                                    padding: "5px",
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
                                }}
                            >
                                О сайте
                            </Link>
                            {login ? null : (
                                <Link
                                    to="/login"
                                    style={{
                                        color: "#fff",
                                        fontSize: "24px",
                                        padding: "5px",
                                    }}
                                >
                                    Логин
                                </Link>
                            )}
                            <Link
                                to="/*"
                                style={{
                                    color: "#fff",
                                    fontSize: "24px",
                                    padding: "5px",
                                }}
                            >
                                Корзина
                            </Link>
                            {login ? (
                                <div style={{ color: "#fff", padding: "5px" }}>
                                    <div
                                        style={{
                                            display: "inline-block",
                                            margin: "0 10px 0 0",
                                        }}
                                    >
                                        {login == "admin"
                                            ? "You are admin now 😎"
                                            : `Hello, ${login}!`}
                                    </div>
                                    <button onClick={logout}>Выйти</button>
                                </div>
                            ) : null}
                        </div>
                    </Container>
                </header>
                <main>
                    <AppRouter />
                </main>
                <footer>
                    <Container>
                        <div className="footer__items"></div>
                    </Container>
                </footer>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
