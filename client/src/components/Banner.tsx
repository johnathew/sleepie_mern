import { Container } from "react-bootstrap";
import sleepieLogo from "/sleepieHQ.jpeg";
import styles from "../styles/Banner.module.css";

const Banner = () => {
    return (
        <Container className={styles.logoContainer}>
            <img src={sleepieLogo} alt="Sleepiecharms Logo" className={styles.logo} />
        </Container>
    );
};

export default Banner;
