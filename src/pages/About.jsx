import React from "react";
import { Container } from "../components/UI/container/Container";
import "../styles/style.css";

export const About = () => {
    return (
        <main className="content">
            <Container>
                <div
                    style={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        margin: "50px auto",
                        textAlign: "center",
                    }}
                >
                    This is my first react project
                </div>
            </Container>
            ;
        </main>
    );
};
