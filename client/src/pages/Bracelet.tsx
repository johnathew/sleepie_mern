import { useQuery, HydrationBoundary } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import { fetchCharm } from "../network/charms_api";
import Spinner from 'react-bootstrap/Spinner';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Product.module.css";
import Charm from "../components/Charm";


export function loader({ params }: { params: { id: string } }) {
  console.log(params);
}

const Bracelet = ({ dehydratedState }: { dehydratedState: unknown }) => {
  // retrieve the charm id from the url
  const { id } = useParams();

  // get the charm type from the url
  const location = useLocation();
  const regex = /\/([^/]*)\//;
  const match = regex.exec(location.pathname);
  const charmType = match ? match[1] : null;

  // fetch the charm data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["charm", { id, type: charmType }],
    queryFn: () => fetchCharm(charmType, id),
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
