import Accordion from "react-bootstrap/Accordion";
import "./institutional.css";
import EslovenosEnRosario from "./eslovenos-en-rosario/EslovenosEnRosario";
import TriglavRosario from "./TriglavRosario/TriglavRosario";
import ListaPresidentes from "./ListaPresidentes/ListaPresidentes";

const Institutional = () => {
  return (
    <>
      
      <h3 className="textMargin">Institucional</h3>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Eslovenos en Rosario</Accordion.Header>
          <Accordion.Body>
            <div className="textMargin">
              <EslovenosEnRosario />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Triglav Rosario</Accordion.Header>
          <Accordion.Body>
            <div className="textMargin">
              <TriglavRosario />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Presidentes a los largo de nuestras historia
          </Accordion.Header>
          <Accordion.Body>
            <div className="textMargin">
              <ListaPresidentes />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Institutional;
