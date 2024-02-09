
import { Container, Row, Col } from "react-bootstrap";
import Charm from "../components/Charm";
import { Charm as CharmModel } from "../models/charm";
import Spinner from 'react-bootstrap/Spinner';
import styles from "../styles/CharmPage.module.css"
import { HydrationBoundary, useQuery } from "@tanstack/react-query";
import { fetchCharms } from "../network/charms_api";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const Home = ({ dehydratedState }: { dehydratedState: unknown }) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["charms"],
        queryFn: fetchCharms,
    })

    if (isError) { return <div>An error occured (im so sorry)</div> }

    return (
        <>
            <Banner />
            <HydrationBoundary state={dehydratedState}>
                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {data && <Container>
                    <Row xs={1} md={2} xl={5} className="justify-content-center">
                        {data.map((charms: CharmModel) =>
                            <Link to={`/bracelets/${charms.slug}`} className={styles.cardLinks} key={charms._id}>
                                <Col xs={1}>
                                    <Charm charm={charms} className={styles.charm} />
                                </Col>
                            </Link>)}
                    </Row>
                </Container>}
            </HydrationBoundary>
        </>
    )
};

export default Home;
