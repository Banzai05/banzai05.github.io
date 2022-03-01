import { Row, Container, Col } from "react-bootstrap"
import './custom.css'

const BannerComp = () =>
    <Container fluid>
        <Row>
            <Col className="mainBanner">
                <h1><span>Hola! mi nombre es Esequiel Morales y creo paginas web!</span></h1>
            </Col>
        </Row>
    </Container>

export default BannerComp