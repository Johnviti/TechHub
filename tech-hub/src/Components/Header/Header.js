import React from "react";
import HeaderLogo from "../Padrao/HeaderLogo";
import NavItem from "../Padrao/NavItem";

const Header = () => {
    return (
        <header>
            <HeaderLogo/>
            <nav>
                <ul>
                    <NavItem link="#" texto="Home"/>
                </ul>
            </nav>
            <div>
                <a href="/contato">Formulário</a>
            </div>
        </header>
    );
}

export default Header;