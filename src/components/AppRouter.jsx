import React from "react";
import { routes } from "../router";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/menu" replace />} />
        </Routes>
    );
};
