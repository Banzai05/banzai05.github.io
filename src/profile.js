import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "../src/img/profile.png"
import htmlIcon from "../src/img/icons/html-5.png"
import cssIcon from "../src/img/icons/css-3.png"
import bootstrapIcon from "../src/img/icons/bootstrap.png"
import javascriptIcon from "../src/img/icons/js.png"
import jqueryIcon from "../src/img/icons/jquery.png"
import reactIcon from "../src/img/icons/atoms.png"
import sqlIcon from "../src/img/icons/sql-server.png"
import gitIcon from "../src/img/icons/git.png"
import appscriptIcon from "../src/img/icons/google-apps-script.png"

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
                <p className="mt-5 mt-md-0">Mi nombre es Esequiel, soy uruguayo de 22 años y actualmente vivo en Barcelona, España. Estudié en la escuela superior de informática (Uruguay) y trabajé en una de las empresas de IT mas grandes de Uruguay como desarrollador web. Ahi aprendí y descubrí que el desarrollo web es la orientacion que me gusta, Hoy en dia busco nuevos desafios y lo más importante, poder seguir aprendiendo y desarrollandome en esta area que tanto me gusta.
                </p>
            </Col>
        </Row>
        <Row className="my-5">
            <Col xs="12" className="my-5">
                <h4>Algunas de mis habilidades</h4>
            </Col>
            <Col xs="12" sm="6" md="2" className="d-flex justify-content-center align-items-center flex-column my-4 offset-md-1">
                <img className="iconSkill" src={htmlIcon}></img>
                <span className="skillTag">HTML</span>
            </Col>
            <Col xs="12" sm="6" md="2" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={cssIcon}></img>
                <span className="skillTag">CSS</span>
            </Col>
            <Col xs="12" sm="6" md="2" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={bootstrapIcon}></img>
                <span className="skillTag">Bootstrap</span>
            </Col>
            <Col xs="12" sm="6" md="2" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={javascriptIcon}></img>
                <span className="skillTag">JavaScript</span>
            </Col>
            <Col xs="12" sm="6" md="2" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={jqueryIcon}></img>
                <span className="skillTag">Jquery</span>
            </Col>
            <Col xs="12" sm="6" md="3" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={reactIcon}></img>
                <span className="skillTag text-center">Learning: React</span>
            </Col>
            <Col xs="12" sm="6" md="3" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={sqlIcon}></img>
                <span className="skillTag text-center">SQL</span>
            </Col>
            <Col xs="12" sm="6" md="3" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={gitIcon}></img>
                <span className="skillTag text-center">Git</span>
            </Col>
            <Col xs="12" sm="6" md="3" className="d-flex justify-content-center align-items-center flex-column my-4 ">
                <img className="iconSkill" src={appscriptIcon}></img>
                <span className="skillTag text-center">AppScript</span></Col>
        </Row>
    </Container>

export default ProfileComp;