import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAmazonaws,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="vscode-icon">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="postman-icon">
        <SiPostman />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-tooltip-id="amazonaws-icon"
      >
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="vercel-icon">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="heroku-icon">
        <SiHeroku />
      </Col>

      <div>
        <Tooltip id="vscode-icon" place="bottom" content="VS Code" />
        <Tooltip id="postman-icon" place="bottom" content="Postman" />
        <Tooltip
          id="amazonaws-icon"
          place="bottom"
          content="Amazon Web Services"
        />
        <Tooltip id="vercel-icon" place="bottom" content="Vercel" />
        <Tooltip id="heroku-icon" place="bottom" content="Heroku" />
      </div>
    </Row>
  );
}

export default Toolstack;
