import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../src/myimage.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
              I accidentally stumbled into AI and, well, turns out it wasn't just about killer robots and sci-fi jargon. 😅
              <br />
              <br />I’m fairly fluent in languages like
              <i>
                <b className="purple"> Python and Javascript. </b>
              </i>
               which I mostly use to convince machines to “learn” stuff.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">AI-driven solutions and intelligent systems,</b> and yes, I do keep an eye on things like{" "}
                <b className="purple">
                  Large Language Models and Generative AI.
                </b>
              </i>
              <br />
              <br />
              When I’m not busy trying to make machines think, I enjoy translating real-world problems into models that hopefully don't hallucinate (too much)
              with <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Deep Learning and NLP Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> PyTorch, Langchain and langraph </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
                            <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%" }} // makes it circular
              />

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
                  href="https://github.com/suneelreddysannala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suneelreddysannala/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/suneel_reddi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
