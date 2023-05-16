import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a a full-stack developer with a passion for coding and a
              strong enthusiasm for web technologies.
              <br />
              <br />
              With expertise in
              <i>
                <b className="purple"> JavaScript, TypeScript and Python, </b>
              </i>
              I bring a versatile skill set to the table. Throughout my career,
              I have dedicated myself to crafting high-quality and efficient web
              solutions. I am experienced in developing robust, scalable, and
              user-friendly applications, employing the latest frameworks and
              tools to deliver exceptional results.
              <br />
              <br />
              Whether it's front-end development, back-end systems, or the
              entire software stack, I strive to create seamless experiences
              that meet the needs of both clients and end-users. My journey in
              the world of web development began with a deep curiosity about how
              technology shapes our online experiences.
              <br />
              <br />I am constantly seeking to stay updated with the latest
              industry trends, tools, and best practices. This commitment allows
              me to deliver modern and cutting-edge solutions, working with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React, Next.js and Node.js</b>
              </i>
              <br />
              <br />
              Aside from coding, I also enjoy sharing my knowledge and
              experiences with others. I actively participate in tech
              communities, attend conferences, and contribute to open-source
              projects. By engaging with fellow developers, I continuously learn
              and grow, all while giving back to the vibrant developer
              community.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Umernasirr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/umer-nasir/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
