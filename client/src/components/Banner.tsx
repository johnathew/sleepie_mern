import { Container } from "react-bootstrap";
import sleepieLogo from "/sleepieHQ.jpeg";
import styles from "../styles/Banner.module.css";

const Banner = () => {
    return (
        <Container className={styles.logoContainer}>
            <img src={sleepieLogo} alt="Sleepiecharms Logo" className={styles.logo} />
            <h1 style={{ color: 'rgb(243, 115, 198)', marginTop: '2rem', fontSize: '16px' }}>
                *yawns* hello, welcome to Sleepiecharms
                <span role="img" aria-label="sleepy emoji">{' '}😴</span>
            </h1>
        </Container>
    );
};

export default Banner;
