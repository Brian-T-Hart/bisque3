import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";

const About = () => (
  
  <div id="about" className="team">

  <Nav />
    <Jumbotron className="wow fadeInUp">
      <h1>Our Team</h1>
    </Jumbotron>

    {/* Row #1 */}
    <Container>
      <Row className="wow fadeInUp">
        <Col size="xs-2 xs-offset-1">
          <center>
            <img
              className="aboutImg img-circle"
              src={require(`../styles/img/jeannine.jpg`)}
              alt="Jeanine"
              style={{ width: "150px" }}
            />
          </center>
        </Col>
        <Col size="xs-8">
          <div className="team-heading-1">Jeanine Smith</div>
          <div className="team-heading-2">Project Manager</div>
          <p>
            It was my 5th grade California History class that got me hooked on
            innovative brand strategies. My constant curiosity of how a
            150-year-old denim brand aged so gracefully and continuously caught
            the attention of generations around the world sparked my nonstop quest
            in testing brand and marketing tactics.{" "}
          </p>
        </Col>
      </Row>

      {/* Row #2 */}
      <Row className="wow fadeInUp">
        <Col size="xs-2 xs-offset-1">
          <center>
            <img
              className="aboutImg img-circle"
              src={require(`../styles/img/Guiyu.jpg`)}
              alt="Guiyu"
              style={{ width: "150px" }}
            />
          </center>
        </Col>
        <Col size="xs-8">
          <div className="team-heading-1">Guiyu "Zoey" Zhao</div>
          <div className="team-heading-2">
            Front End Developer &amp; QA Manager
          </div>
          <p>
            I am a problem solver who can translate business needs into
            client-friendly functions that will expand your website’s influence
            and increase your web conversions. Strong multitasking, project
            management skills, and high level of attention to details.
          </p>
        </Col>
      </Row>

      {/* Row #3 */}
      <Row className="wow fadeInUp">
        <Col size="xs-2 xs-offset-1">
          <center>
            <img
              className="aboutImg img-circle"
              src={require(`../styles/img/Dennis.jpg`)}
              alt="Dennis"
              style={{ width: "150px" }}
            />
          </center>
        </Col>
        <Col size="xs-8">
          <div className="team-heading-1">Dennis Alvey</div>
          <div className="team-heading-2">
            Front End Developer &amp; UI/UX Manager
          </div>
          <p>
            I became interested in web deveopment when I learned that it was
            possible to record music in your bedroom. Once I got comfortable with
            using a DAW, the necessary skills to troubleshooting and starting a
            website were a necessity. I then became interested in the
            possibilities that web development held for me not only as a musician,
            but as a career.
          </p>
        </Col>
      </Row>
      
      {/* Row #4 */}
      <Row className="wow fadeInUp">
        <Col size="xs-2 xs-offset-1">
          <center>
            <img
              className="aboutImg img-circle"
              src={require(`../styles/img/Brian.jpg`)}
              alt="Brian"
              style={{ width: "150px" }}
            />
          </center>
        </Col>
        <Col size="xs-8">
          <div className="team-heading-1">Brian Hart</div>
          <div className="team-heading-2">
            Back End Developer &amp; Git Master
          </div>
          <p>
            I currently teach Algebra, Physics, and Robotics. I have been teaching
            at my current school for 11 years.
          </p>
        </Col>
      </Row>

      {/* Row #5 */}

      <Row className="wow fadeInUp">
        <Col size="xs-2 xs-offset-1">
          <center>
            <img
              className="aboutImg img-circle"
              src={require(`../styles/img/Tatianna.jpg`)}
              alt="Tatianna"
              style={{ width: "150px" }}
            />
          </center>
        </Col>
        <Col size="xs-8">
          <div className="team-heading-1">Tatianna Watwood</div>
          <div className="team-heading-2">
            Back End Developer &amp; Code Review Manager
          </div>
          <p>
            Full stack web developer skilled in creating web applications using
            front and backend technologies and multiple languagues. Other relevant
            skills include Public Speaking, Microsoft Powerpoint Presentations,
            and leadership capabilities. Strong engineering professional with a
            Bachelor of Science (B.S.) focused in Applied Mathematics from
            California State University, Long Beach.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
