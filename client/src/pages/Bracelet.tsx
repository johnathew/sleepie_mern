import { useQuery, HydrationBoundary } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCharm } from "../network/charms_api";
import Spinner from 'react-bootstrap/Spinner';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Product.module.css";
import Charm from "../components/Charm";

const Bracelet = ({ dehydratedState }: { dehydratedState: unknown }) => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["charm", { id }],
    queryFn: () => fetchCharm(id!),
  });


  if (isError) {
    return <div>An error occured (im so sorry)</div>;
  }

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        {isLoading && <Spinner animation="grow" role='status'><span className="visually-hidden">Loading...</span></Spinner>}
        {
          data &&
          <Container>
            <Row>
              <Col >
                <Charm charm={data} className={styles.product} />
              </Col>
              <Col>
                product details
                stock qty
                price
                amount to be requested for purchase
                description
              </Col>
            </Row>
          </Container>
        }
      </HydrationBoundary >
    </>
  );
};

export default Bracelet;
