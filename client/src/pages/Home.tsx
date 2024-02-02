import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Charm from "../components/Charm";
import { Charm as CharmModel } from "../models/charm";
import styles from "../styles/CharmPage.module.css"
import Banner from "../components/Banner";
const Home = () => {

    const [charms, setCharms] = useState<CharmModel[]>([])

    useEffect(() => {
        async function loadCharms() {
            try {
                const response = await fetch("/api/charms", { method: "GET" })
                const charms = await response.json()
                setCharms(charms)
            } catch (error) {
                console.error(error)
                alert(error)
            }
        }
        loadCharms()
    }, [])
    return (
        <>
        <Banner />
            <Container fluid>
                <Row xs={1} md={2} xl={4}>
                    {charms.map((charm) =>
                        <Col key={charm._id}><Charm charm={charm} className={styles.charm} /> </Col>)}
                </Row>
            </Container>
        </>)
};

export default Home;
