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
import { links, loginLinks, publicLinks } from "./links";

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
                        <nav className="header__items">
                            <div className="header__item_logo">LOGO</div>
                            {login
                                ? loginLinks.map((link) => (
                                      <Link
                                          to={link.path}
                                          className="header__item"
                                      >
                                          {link.name}
                                      </Link>
                                  ))
                                : publicLinks.map((link) => (
                                      <Link
                                          to={link.path}
                                          className="header__item"
                                      >
                                          {link.name}
                                      </Link>
                                  ))}

                            {login ? (
                                <div className="header__user">
                                    <div className="header__username">
                                        {login == "admin"
                                            ? "You are admin now 😎"
                                            : `Hello, ${login}!`}
                                    </div>
                                    <button
                                        className="header__btn"
                                        onClick={logout}
                                    >
                                        Выйти
                                    </button>
                                </div>
                            ) : null}
                        </nav>
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
