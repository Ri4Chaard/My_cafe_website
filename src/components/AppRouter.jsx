import React, { useContext } from "react";
import { publicRoutes, loginRoutes } from "../router";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context";

export const AppRouter = () => {
    const { login } = useContext(AuthContext);
    return (
        <Routes>
            {login
                ? loginRoutes.map((route) => (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={route.element}
                      />
                  ))
                : publicRoutes.map((route) => (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={route.element}
                      />
                  ))}
            <Route path="*" element={<Navigate to="/menu" replace />} />
        </Routes>
    );
};
