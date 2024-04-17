import './info.css';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Info = () => {
  return (
    <div>
      <h2>Información</h2>

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sobre Eslovenia</Accordion.Header>
          <Accordion.Body>
            <div>
              <Container>
              <Row>
                <Col>
                    <img
                        className="imagenMapa"
                        src="../src/assets/mapadeeslovenia.webp"
                        alt="Mapa de Eslovenia" />
                    <p>Situada en el corazón de Europa, en el cruce de tres regiones geológicas: Los Alpes, el Mediterráneo y la llanura Panónica.</p>
                </Col>

                <Col>
                    <ul><b>Capital:</b> Ljubljana (265.000 habitantes).</ul>
                    <ul><b>Superficie:</b> 20.250 km2. Bosques: 10.124 km2. Viñas: 216 km2.</ul>
                    <ul><b>Población:</b> 2.051.000 – 90% de eslovenos, minorías húngaras e italianas.</ul>
                    <ul><b>Densidad:</b> 99,6 hab./km2.</ul>
                    <ul><b>Religión:</b> la mayoría de la población es católica.</ul>
                    <ul><b>Clima:</b> hay tres zonas climáticas: continental, alpina y mediterránea. La temperatura media es de 21º C en verano y 0º C en invierno.</ul>
                    <ul><b>Sistema político:</b> Democracia Parlamentaria Multipartidaria, el Parlamento es bicameral, lo forman la Asamblea de Estado y el Consejo de Estado.</ul>
                    <ul><b>Unidad monetaria:</b> euro (EUR), válido desde el 1 de enero de 2007.</ul>
                    <ul><b>PIB per cápita EUR:</b> 22.800¬ (2008) – esto es el 90 % del PIB promedio per cápita en los 27 paises miembros de la UE.</ul>
                    <ul><b>Edad promedio de los habitantes:</b> 41,4 años</ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul><b>Ciudades principales:</b> Ljubljana, Maribor (103.100 hab.), Celje (39.800 hab.), Kranj (36.800 hab.), Velenje (27.100 hab.), Koper (24.600 hab.), Novo Mesto (22.600 hab.).</ul>
                    <ul><b>Esperanza de vida:</b> hombres 73 años, mujeres 81 años</ul>
                    <ul><b>Promedio de niños por mujer:</b> 1,2</ul>
                    <ul><b>Clima:</b> alpino, continental, mediterráneo.</ul>
                    <ul><b>Huso horario:</b> hora central europea, GMT + 1, en verano GMT + 2</ul>
                    <ul><b>Temperaturas promedio:</b> julio 21°C, enero 0°C</ul>
                    <ul><b>Corriente eléctrica:</b> 230 V</ul>
                </Col>
                <Col>
                    <ul><b>Unidades de medida:</b> métricas - metros, kilómetros, gramos, kilogramos. Las temperaturas se expresan en grados Celsius.</ul>
                    <ul><b>Longitud de la frontera:</b> con Austria 330 km, con Italia 280 km, con Hungría 102km y con Croacia 670 km; en total 1.382 km</ul>
                    <ul><b>Longitud de la costa:</b> 46,6 km</ul>
                    <ul><b>Pico más alto:</b> Triglav, 2.864 m</ul>
                    <ul><b>Altitud promedio:</b> 556,8 m</ul>
                    <ul><b>Universidades:</b> en Liubliana, Maribor y en la región de Primorska.</ul>
                </Col>
            </Row>
            <Row>
                <img
                    className='imagenBandera'
                    src="../src/assets/BanderadeEslovenia.png"
                    alt="Mapa de Eslovenia" />
            </Row>
              </Container>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Fiestas oficiales y feriados</Accordion.Header>
          <Accordion.Body>
            
            <li><b>Fiestas oficiales y feriados en Eslovenia:</b></li>
            <ul><b>1 y 2 de Enero:</b> Año Nuevo</ul>
            <ul><b>8 de Febrero:</b> Día de Prešeren, Fiesta cultural eslovena</ul>
            <ul><b>4 de Abril :</b> Domingo de Pascua</ul>
            <ul><b>5 April:</b> Lunes de Pascua</ul>
            <ul><b>27 de Abril:</b> Día de la sublevación contra la ocupación</ul>
            <ul><b>1 y 2 de Mayo:</b> Día del trabajo</ul>
            <ul><b>25 de Junio:</b> Fiesta Nacional Día de la Nación</ul>
            <ul><b>15 de Agosto:</b> Día de la Asunción de la Virgen María a los cielos</ul>
            <ul><b>17 de Agosto:</b> Día de la unificación de los eslovenos de la región de Prekmurje a la patria después de la Primera Guerra Mundial (no es feriado)</ul>
            <ul><b>15 de Septiembre:</b> Reintegración de la región de Primorska a la patria (no es feriado)</ul>
            <ul><b>31 de Octubre:</b> Día de la Reforma</ul>
            <ul><b>1 de Noviembre:</b> Día de los Difuntos</ul>
            <ul><b>23 de Noviembre:</b> Día de Rudolf Maister (no es feriado)</ul>
            <ul><b>25 de Diciembre:</b> Navidad</ul>
            <ul><b>26 de Diciembre:</b> Día de la Independencia y la Unidad </ul>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Info