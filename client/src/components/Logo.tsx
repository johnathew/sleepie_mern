
import sleepieLogo from "/sleepieHQ.jpeg";
import styles from "../styles/Banner.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img src={sleepieLogo} alt="Sleepiecharms Logo" className={styles.logo} />
        </Link>
    );
};

export default Logo;
