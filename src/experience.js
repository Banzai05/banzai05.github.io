import { Container, Row, Col } from "react-bootstrap";
import tcsLogo from '../src/img/tcsLogo.png'
import medalLogo from "../src/img/medal.png"
import handShake from "../src/img/handshake.png"
import sotm2019 from "../src/pdf/Star_of_the_Month_Award_2019.pdf"
import sotm2021 from "../src/pdf/Star_of_the_Month_Award_2021.pdf"
import recognitionTCSq322 from "../src/pdf/Recognition_Q2_21.pdf"

const ExperienceComp = () =>
    <Container className="mt-5 py-5">
        <Row>
            <Col>
                <h2 className="mt-4">Trayectoria y reconocimientos</h2>
            </Col>
        </Row>
        <Row>
            <Col md={6} className="d-flex justify-content-center align-items-center">
                <img className="w-100 tcsLogo" src={tcsLogo}></img>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center mb-5 mb-md-0">
                <p className="mb-0">Web developer <br />abr. 2019 - nov. 2021<br /></p>
            </Col>
        </Row>
        <Row>
            <Col md={4} className="my-4 my-md-0 px-3 px-lg-5">
                <div className="card">
                    <h6 className="text-center py-4 mb-0">Start of the month 2019</h6>
                    <img src={medalLogo} className="w-50"></img>
                    <br></br>
                    <a className="learnMoreBtn mb-4" href={sotm2019} target="_blank">Learn more</a>
                </div>
            </Col>
            <Col md={4} className="my-4 my-md-0 px-3 px-lg-5">
                <div className="card">
                    <h6 className="text-center py-4 mb-0">Reconocimiento Q2 2021</h6>
                    <img src={handShake} className="w-50"></img>
                    <br></br>
                    <a className="learnMoreBtn mb-4" href={recognitionTCSq322} target="_blank">Learn more</a>
                </div>
            </Col>
            <Col md={4} className="my-4 my-md-0 px-3 px-lg-5">
                <div className="card">
                    <h6 className="text-center py-4 mb-0">Start of the month 2021</h6>
                    <img src={medalLogo} className="w-50"></img>
                    <br></br>
                    <a className="learnMoreBtn mb-4" href={sotm2021} target="_blank">Learn more</a>
                </div>
            </Col>
        </Row>
    </Container>

export default ExperienceComp;