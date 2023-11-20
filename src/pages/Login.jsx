import React from "react";
import { Container } from "../components/UI/container/Container";
import "../styles/style.css";
import { FormInput } from "../components/UI/input/FormInput";
import { ExecuteButton } from "../components/UI/button/ExecuteButton";

export const Login = () => {
    return (
        <main className="content">
            <Container>
                <form className="login__form">
                    <FormInput type="input" placeholder="Логин"></FormInput>
                    <FormInput type="input" placeholder="Пароль"></FormInput>
                    <ExecuteButton type="submit">Войти</ExecuteButton>
                </form>
            </Container>
        </main>
    );
};
