import { HydrationBoundary, useQuery } from "@tanstack/react-query";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Charm as CharmModel } from "../models/charm";
import Charm from "../components/Charm";
import { fetchCharmsOfType } from "../network/charms_api";
import { useLocation } from "react-router-dom";
import styles from "../styles/HomePage.module.css";
import NotFound from "../pages/NotFound";

const Charms = ({ dehydratedState }: { dehydratedState: unknown }) => {
    const { state } = useLocation();
    const type = state?.type;

    const { data, isFetching, isError } = useQuery({
        queryKey: [type],
        queryFn: () => fetchCharmsOfType(type),
    });

    if (isError) {
        return <div>An error occured (im so sorry)</div>;
    }

    if (data?.error === `No ${type.slice(0, -1)} found.`) {
        return <NotFound type={type} />;
    }

    return (
        <>
            {isFetching && <div id="loading-status"><Spinner animation="grow" className="bg-red-400" role='status'><span className="visually-hidden">Loading....</span></Spinner> </div>}
            <HydrationBoundary state={dehydratedState}>
                {data &&
                    <Container>
                        <Row xs={1} sm={2} md={3} xl={5} >
                            {data.map((charm: CharmModel) =>
                                <Col xs={1} key={charm._id}>
                                    <Link to={`${charm.slug}`} className={styles.cardLinks}>
                                        <Charm charm={charm} className={styles.charm} />
                                    </Link>
                                </Col>
                            )}
                        </Row>
                    </Container>}
            </HydrationBoundary>
        </>
    )
};

export default Charms;
