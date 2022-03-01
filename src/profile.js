import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "../src/img/profile.png"

const ProfileComp = () =>
    <Container className="my-5 py-4">
        <Row className="my-5">
            <Col>
                <h2>Acerca de mi</h2>
            </Col>
        </Row>
        <Row>
            <Col md={4} className="d-flex justify-content-center align-items-center">
                <img src={profilePicture} className="img-fluid profilePic"></img>
            </Col>

            <Col md={8} className="d-flex justify-content-center align-items-center">
                <p className="mt-5 mt-md-0">Mi nombre es Esequiel, soy uruguayo de 22 años y actualmente vivo en Barcelona, España. Estudie en la escuela superior de informatica (Uruguay) y trabaje en una de las empresas de IT mas grandes de Uruguay como desarrollador web. Ahi aprendi y descubrí que el desarrollo web es la orientacion que me gusta, Hoy en dia busco nuevos desafios y lo más importante poder seguir aprendiendo y desarrollandome en esta area que tanto me gusta.
                </p>
            </Col>
        </Row>
        <Row className="my-5">
            <Col xs="12" className="my-5">
                <h4>Algunas de mis habilidades</h4>
            </Col>
            <Col xs="12" md="2" className="d-flex justify-content-center align-items-center my-3 my-md-0"><span className="skillTag">HTML</span></Col>
            <Col xs="12" md="2" className="d-flex justify-content-center align-items-center my-3 my-md-0"><span className="skillTag">CSS</span></Col>
            <Col xs="12" md="2" className="d-flex justify-content-center align-items-center my-3 my-md-0"><span className="skillTag">Bootstrap</span></Col>
            <Col xs="12" md="2" className="d-flex justify-content-center align-items-center my-3 my-md-0"><span className="skillTag">JavaScript</span></Col>
            <Col xs="12" md="2" className="d-flex justify-content-center align-items-center my-3 my-md-0"><span className="skillTag">Jquery</span></Col>
            <Col xs="12" md="2" className="d-flex justify-content-center align-items-center my-3 my-md-0"><span className="skillTag text-center">Learning: React</span></Col>
        </Row>
    </Container>

export default ProfileComp;