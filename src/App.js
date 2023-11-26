import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./components/UI/container/Container";
import { AuthContext } from "./components/context";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/UI/Navbar/Navbar";

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
                    <Navbar logout={logout} />
                </header>
                <main>
                    <AppRouter />
                </main>
                <footer>
                    <Container>
                        <div className="footer__items">
                            <div className="footer__item">Мій тг: @Ri4Aard</div>
                            <div className="footer__item">
                                6.04.122.010.20.01 😎
                            </div>
                        </div>
                    </Container>
                </footer>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
