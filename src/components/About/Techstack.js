import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJavascript1 } from "react-icons/di";
import { FaBrain, FaRobot } from "react-icons/fa";
import {
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
  SiFastapi,
  SiJupyter,
  SiOpenai,
  // SiLangchain,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot title="spaCy / NLP Bots" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain title="Hugging Face / Transformers / GenAI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Techstack;
