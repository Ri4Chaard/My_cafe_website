import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";

export const routes = [
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
];
