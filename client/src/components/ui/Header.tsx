import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "../../styles/Header.module.css";
import { TbShoppingCartHeart } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ButtonGroup className={styles.headerControl} aria-label="Sign up, login, cart, and products buttons">
                <NavLink to="/" >
                    <Button variant='nav'>
                        home
                    </Button>
                </NavLink>
                <DropdownButton  variant="nav" as={ButtonGroup} title="products" id="dropdown-basic">
                    <Dropdown.ItemText>
                        <NavLink to="bracelets">bracelets</NavLink>
                    </Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.ItemText>
                        <NavLink to="necklaces">necklaces</NavLink>
                    </Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.ItemText>
                        <NavLink to="bookmarks">bookmarks</NavLink>
                    </Dropdown.ItemText>
                </DropdownButton>
                <NavLink to="signup" style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}>
                    <Button variant="nav">
                        sign up
                    </Button>
                </NavLink>
                <NavLink to="login">
                    <Button variant="nav">login</Button>
                </NavLink>
                <NavLink to="cart" >
                    <Button variant="nav"><TbShoppingCartHeart fontSize="21px" />
                    </Button>
                </NavLink>
            </ButtonGroup>
        </header >);
};

export default Header;
