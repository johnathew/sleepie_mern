import { Charm as CharmModel } from "../models/charm";
import { Card } from "react-bootstrap";
import styles from "../styles/Charm.module.css"
import { formatDate } from "../utils/formatDate";

interface CharmProps {
  charm: CharmModel,
  className?: string,
}

const Charm = ({ charm, className }: CharmProps) => {

  let createdUpdatedText: string;

  if (charm.updatedAt > charm.createdAt) {
    createdUpdatedText = "Updated: " + formatDate(charm.updatedAt)
  } else {
    createdUpdatedText = "Created: " + formatDate(charm.createdAt)
  }

  return (
    <Card className={`${styles.charmMain} ${className}`}>
      <Card.Body>
        <Card.Title className={styles.charmTitle}>
          {charm.name}
        </Card.Title>
        <Card.Img className={styles.charmImg} variant="top" src={charm.imgUrl} alt='Jewelry image' />
        <Card.Text className={styles.charmPrice}>
          {`$${charm.price}`}
        </Card.Text>
        <Card.Subtitle className={styles.charmDesc}>
          {charm.desc}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer className={styles.charmFooter}>
        {createdUpdatedText}
      </Card.Footer>
    </Card>
  )
};

export default Charm;
