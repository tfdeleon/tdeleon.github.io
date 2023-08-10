import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import linkedIn from "../assets/img/linkedin.svg";
import "../styles/Footer.css"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center footer-bx">
          <Col xs={6} sm={6}>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/timothy-de-leon197/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt=""/>
              </a>
              <a
                href="https://github.com/tfdeleon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
            <p>Thanks for stopping by!</p>
          </Col>
          <Col xs={6} sm={6} className="align-self-end">
            <a href="#home">
              <h1>Hope to hear from You!</h1>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
