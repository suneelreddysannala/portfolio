import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suneel Reddy Sannala </span>
            from <span className="purple"> India.</span>
            <br />
            I am currently employed as a AI ENGINEER at ReNote AI.
            <br />
            I have completed Bachelor's in Computer Science Engineering in AI specialization from Jawaharlal Nehru Technological University, Anantapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't fit into the society make the difference"{" "}
          </p>
          <footer className="blockquote-footer">Suneel Reddy Sannala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
