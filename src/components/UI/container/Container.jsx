import React from "react";
import cl from "./Container.module.css";

export const Container = ({ children }) => {
    return <div className={cl.container}>{children}</div>;
};
