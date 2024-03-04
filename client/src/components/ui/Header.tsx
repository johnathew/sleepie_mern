import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "../../styles/Header.module.css";
import { TbShoppingCartHeart } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Header = () => {

    const linkStyle = (isActive: boolean) => {
        return {
            textDecoration: isActive ? "underline" : "none",
        }
    }

    const navDropdown = ["bracelets", "necklaces", "bookmarks", "keychains"]

    const navPages = ["login/signup", "about"]

    const navDropdownLinks = navDropdown.map((item) => {

        return (
            <Dropdown.Item key={item} as='div'>
                <NavLink to={item} state={{ type: item }} style={({ isActive }: { isActive: boolean }) => linkStyle(isActive)} className={styles.nav}>{item}</NavLink>
            </Dropdown.Item>
        )
    })
    const navPagesLinks = navPages.map((item) => {

        if (item === "login/signup") {
            return (
                <NavLink key={item} to="auth?mode=login" style={({ isActive }: { isActive: boolean }) => linkStyle(isActive)} className={styles.nav}>login/signup</NavLink>
            )
        }
        return (
            <NavLink key={item} to={item} style={({ isActive }: { isActive: boolean }) => linkStyle(isActive)} className={styles.nav}>{item}</NavLink>
        )
    })


    return (
        <header>
            <ButtonGroup className={styles.headerControl} aria-label="Home, sign up, login, and products buttons">
                <NavLink to="/" style={({ isActive }: { isActive: boolean }) => linkStyle(isActive)} className={styles.nav}>
                    home
                </NavLink>
                <DropdownButton title="products" as="div">
                    {navDropdownLinks}
                </DropdownButton>
                {navPagesLinks}
            </ButtonGroup>
            <ButtonGroup className={styles.headerControl} aria-label="Previous orders and Cart buttons">
                <NavLink to="previous-orders" style={({ isActive }: { isActive: boolean }) => linkStyle(isActive)} className={styles.nav}>
                    previous orders
                </NavLink>
                <NavLink to='cart' style={({ isActive }: { isActive: boolean }) => linkStyle(isActive)} className={styles.nav}>
                    <TbShoppingCartHeart fontSize="20px" className="drop-shadow-none" />
                </NavLink>
            </ButtonGroup>
        </header >);
};

export default Header;
