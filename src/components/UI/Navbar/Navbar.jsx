import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../container/Container";
import classes from "./Navbar.module.css";
import { loginLinks, publicLinks } from "../../../links";
import { AuthContext } from "../../context";

export const Navbar = ({ logout }) => {
    const { login } = useContext(AuthContext);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const rootClasses = [classes.navBurger];

    if (burgerMenu) {
        console.log("worked");
        rootClasses.push(classes.active);
        console.log(rootClasses);
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    console.log(login);

    return (
        <Container>
            <div className={classes.navItems}>
                <div className={classes.navItemLogo}>LOGO</div>
                <div
                    className={classes.navBurgerBtn}
                    onClick={() => {
                        setBurgerMenu(!burgerMenu);
                    }}
                >
                    Menu
                </div>
                <nav
                    className={rootClasses.join(" ")}
                    onClick={() => {
                        setBurgerMenu(!burgerMenu);
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
                                        ? "You are admin now 😎"
                                        : `Hello, ${login}!`}
                                </div>
                                <button
                                    className={classes.navBtn}
                                    onClick={() => {
                                        setBurgerMenu(!burgerMenu);
                                        logout();
                                    }}
                                >
                                    Выйти
                                </button>
                            </div>
                        ) : null}
                    </div>
                </nav>
            </div>
        </Container>
    );
};
