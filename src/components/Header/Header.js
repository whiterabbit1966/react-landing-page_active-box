import React, { Component } from "react";
import BurgerBtn from "./BurgerBtn";

class Header extends Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const isTop = window.scrollY > 0;
            const header = document.querySelector(".header");
            const bugerBtnFix = document.querySelector(".burger-btn");
            if (isTop) {
                header.classList.add("header--fixed");
                bugerBtnFix.classList.add("burger-btn--fixed");
            } else {
                header.classList.remove("header--fixed");
                bugerBtnFix.classList.remove("burger-btn--fixed");
            }
        });
    }
    componentWillUnmount() {
        window.removeEventListener("scroll");
    }
    render() {
        return (
            <header className="header">
                <BurgerBtn />
                <div className="container header--container">
                    <div className="header__logo">
                        <img src="img/header/header-logo.png" />
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a className="header-nav__link" href="#intro">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="header-nav__link" href="#features">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a className="header-nav__link" href="#works">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a className="header-nav__link" href="#ourteam">
                                    Our team
                                </a>
                            </li>
                            <li>
                                <a className="header-nav__link" href="#testimonials">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a className="header-nav__link header--nav__link--right" href="#download">
                                    Download
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
