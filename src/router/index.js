import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";

export const publicRoutes = [
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
];

export const loginRoutes = [
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
];
