import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../container/Container";
import classes from "./Navbar.module.css";
import { loginLinks, publicLinks } from "../../../links";
import { AuthContext } from "../../context";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const Navbar = ({ logout }) => {
    const { login } = useContext(AuthContext);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const rootClasses = [classes.navBurger];
    const windowWidth = useWindowSize(window.innerWidth);

    if (burgerMenu) {
        rootClasses.push(classes.active);
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <Container>
            <div className={classes.navItems}>
                <div className={classes.navItemLogo}>ЛОГО</div>
                {windowWidth <= 1024 ? (
                    <div
                        className={classes.navBurgerBtn}
                        onClick={() => {
                            setBurgerMenu(!burgerMenu);
                        }}
                    >
                        <span></span>
                    </div>
                ) : null}

                <nav
                    className={rootClasses.join(" ")}
                    onClick={() => {
                        if (windowWidth <= 1024) setBurgerMenu(!burgerMenu);
                    }}
                >
                    <div
                        className={classes.navMenu}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {login
                            ? loginLinks.map((link) => (
                                  <Link
                                      key={link.path}
                                      to={link.path}
                                      className={classes.navItem}
                                      onClick={() => {
                                          if (windowWidth <= 1024)
                                              setBurgerMenu(!burgerMenu);
                                      }}
                                  >
                                      {link.name}
                                  </Link>
                              ))
                            : publicLinks.map((link) => (
                                  <Link
                                      key={link.path}
                                      to={link.path}
                                      className={classes.navItem}
                                      onClick={() => {
                                          if (windowWidth <= 1024)
                                              setBurgerMenu(!burgerMenu);
                                      }}
                                  >
                                      {link.name}
                                  </Link>
                              ))}

                        {login ? (
                            <div className={classes.navUser}>
                                <div className={classes.navUsername}>
                                    {login == "admin"
                                        ? "Ви тепер адмін 😎"
                                        : `Привіт, ${login}!`}
                                </div>
                                <button
                                    className={classes.navBtn}
                                    onClick={() => {
                                        if (windowWidth <= 1024)
                                            setBurgerMenu(!burgerMenu);
                                        logout();
                                    }}
                                >
                                    Вийти
                                </button>
                            </div>
                        ) : null}
                    </div>
                </nav>
            </div>
        </Container>
    );
};
