import React, { useContext, useState } from "react";
import { Container } from "../components/UI/container/Container";
import "../styles/style.css";
import { FormInput } from "../components/UI/input/FormInput";
import { ExecuteButton } from "../components/UI/button/ExecuteButton";
import { AuthContext } from "../components/context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { login, setLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const auth = (e) => {
        e.preventDefault();
        setLogin(username);
        localStorage.setItem("login", username);
        setUsername("");
        navigate("/menu");
    };

    return (
        <Container>
            <form className="login__form">
                <FormInput
                    value={username}
                    type="input"
                    placeholder="Логин"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                ></FormInput>
                <FormInput type="password" placeholder="Пароль"></FormInput>
                <ExecuteButton type="submit" onClick={auth}>
                    Войти
                </ExecuteButton>
            </form>
        </Container>
    );
};
