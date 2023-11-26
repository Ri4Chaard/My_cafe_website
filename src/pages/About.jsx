import React from "react";
import { Container } from "../components/UI/container/Container";
import "../styles/style.css";

export const About = () => {
    return (
        <Container>
            <div
                style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "50px auto",
                    textAlign: "center",
                }}
            >
                Це мій перший проєкт на реакті
            </div>
        </Container>
    );
};
