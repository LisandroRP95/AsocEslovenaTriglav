import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MapSlo from "./Map/MapSlo";

const Location = () => {
  return (
    <div>
      <h1>Ubicación de la República de Eslovenia</h1>
      <Container>
        <Row>
          <MapSlo />
        </Row>
      </Container>
    </div>
  );
};

export default Location;
