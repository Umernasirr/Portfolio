import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Greetings!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {" "}
                I'm
                <strong className="main-name"> UMER NASIR</strong>
              </h1>

              <div style={{ padding: 20, paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>

              <div style={{ padding: 20, paddingLeft: 45, textAlign: "left" }}>
                <Button
                  variant="primary"
                  href={"/resume"}
                  style={{ maxWidth: "300px" }}
                >
                  &nbsp;View Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>

      <Home2 />
    </div>
  );
}

export default Home;
