import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { Tooltip } from "react-tooltip";

import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiGraphql,
} from "react-icons/si";

import "react-tooltip/dist/react-tooltip.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-tooltip-id="javascript-icon"
      >
        <DiJavascript1 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-tooltip-id="typescript-icon"
      >
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="react-icon">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="node-icon">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="next-icon">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="nest-icon">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="git-icon">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="mongo-icon">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="firebase-icon">
        <SiGraphql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="nest-icon">
        <SiPrisma />
      </Col>
      <div>
        <Tooltip id="javascript-icon" place="bottom" content="Javascript" />
        <Tooltip id="typescript-icon" place="bottom" content="Typescript" />
        <Tooltip id="node-icon" place="bottom" content="Node.js" />
        <Tooltip id="react-icon" place="bottom" content="ReactJs" />
        <Tooltip id="mongo-icon" place="bottom" content="MongoDB" />
        <Tooltip id="next-icon" place="bottom" content="NextJs" />
        <Tooltip id="git-icon" place="bottom" content="Git" />
        <Tooltip id="firebase-icon" place="bottom" content="Firebase" />
        <Tooltip id="python-icon" place="bottom" content="Python" />
        <Tooltip id="nest-icon" place="bottom" content="NestJs" />
      </div>
    </Row>
  );
}

export default Techstack;
