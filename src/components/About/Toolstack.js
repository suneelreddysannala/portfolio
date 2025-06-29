import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiDocker,
  SiJupyter,
  SiVercel,
  SiLinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter title="Jupyter Notebooks" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>
    </Row>
  );
}

export default Toolstack;
