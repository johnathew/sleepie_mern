import { Charm as CharmModel } from "../models/charm";
import { Card, Image } from "react-bootstrap";
import styles from "../styles/Charm.module.css"

export interface CharmProps {
  charm: CharmModel,
  className?: string,
}

const Charm = ({ charm, className }: CharmProps) => {
  return (
    <Card className={`${styles.charmMain} ${className}`}>
      <Image src={charm.imgUrl} className={styles.charmImg} thumbnail alt='Jewelry image' />
      <Card.Body className={styles.charmBody}>
        <Card.Title className={styles.charmTitle}>
          {charm.name}
        </Card.Title>
        <Card.Text className={styles.charmPrice}>
          {`$${charm.price}`}
        </Card.Text>
      </Card.Body>
      <Card.Subtitle className={styles.charmDesc}>
        {charm.desc}
      </Card.Subtitle>
    </Card>
  )
};

export default Charm;
