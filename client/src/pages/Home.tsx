
import { Container } from "react-bootstrap";
import styles from "../styles/HomePage.module.css";
import MoonPhases from "../components/ui/MoonPhases";
import LogoMain from "../components/ui/LogoMain";

const Home = () => {
    return (
        <Container className={styles.containerHome}>
            <LogoMain />
            <MoonPhases />
        </Container>
    )
};

export default Home;
