import React from "react";
import HeaderLogo from "../../Components/Logo/HeaderLogo";
import NavItem from "../../Components/NavItem/NavItem";

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