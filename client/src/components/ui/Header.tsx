import { Button, ButtonGroup } from "react-bootstrap";
import styles from "../../styles/Header.module.css";
import { TbShoppingCartHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
// import { TbShoppingCart } from "react-icons/tb";

const Header = () => {
    return <header>
        *yawns* hello, welcome to Sleepiecharms <span role="img" aria-label="sleepy emoji">😴</span>
        <ButtonGroup className={styles.headerControl} aria-label="Sign up, login, and Cart buttons">
            <Link to="/">
                <Button variant="nav">Home</Button>
            </Link>
            <Link to="signup">
                <Button variant="nav">Sign Up</Button>
            </Link>
            <Link to="login">
                <Button variant="nav">Login</Button>
            </Link>
            <Link to="cart">
                <Button variant="nav"><TbShoppingCartHeart fontSize="21px" />
                </Button>
            </Link>
        </ButtonGroup>
    </header>;
};

export default Header;
