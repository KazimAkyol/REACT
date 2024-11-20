import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import photo1 from "../assets/ahmet.png";
import photo2 from "../assets/Ayse.png";
import photo3 from "../assets/Fatma.png";
import photo4 from "../assets/Oya.png";

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo1} />
        <Card.Body>
          <Card.Title>Dr.Ahmet Bilen</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo2} />
        <Card.Body>
          <Card.Title>Dr.Ayse Okur</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo3} />
        <Card.Body>
          <Card.Title>Dr.Fatma Idil</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo4} />
        <Card.Body>
          <Card.Title>Dr.Oya Basar</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
