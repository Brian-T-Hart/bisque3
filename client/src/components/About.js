import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";

const About = () => (
  <div id="about">
    <Nav />
    <Jumbotron className="wow fadeInUp">
      <h1>Our Team</h1>
    </Jumbotron>

    {/* Row #1 */}
    <Container>
      <Row>
        <div className="about">
          <Col size="xs-3 md-2 md-offset-1">
            <center>
              <img
                className="col-xs-12 aboutImg img-circle img-responsive"
                src={require(`../styles/img/jeannine_2.jpg`)}
                alt="Jeanine"
              />
            </center>
          </Col>
          <Col size="xs-8">
            <div className="team-heading-1">Jeanine Smith</div>
            <div className="team-heading-2">Project Manager</div>
            <p>
              It was Jeanine's 5th grade California History class that got her hooked on
              innovative brand strategies. Her constant curiosity of how a
              150-year-old denim brand aged so gracefully and continuously caught
              the attention of generations around the world sparked her nonstop
              quest in testing brand and marketing tactics.
            </p>
          </Col>
        </div>
      </Row>

      {/* Row #2 */}
      <Row>
        <div className="about">
          <Col size="xs-3 md-2 md-offset-1">
            <center>
              <img
                className="col-xs-12 aboutImg img-circle img-responsive"
                src={require(`../styles/img/Guiyu_3.jpg`)}
                alt="Guiyu"
              />
            </center>
          </Col>
          <Col size="xs-8">
            <div className="team-heading-1">Guiyu "Zoey" Zhao</div>
            <div className="team-heading-2">
              Front End Developer &amp; QA Manager
            </div>
            <p>
              Guiyu is a problem solver who can translate business needs into
              client-friendly functions that will expand your website’s influence
              and increase web conversions. She has strong multitasking, project
              management skills, and high level of attention to details.
            </p>
          </Col>
        </div>
      </Row>

      {/* Row #3 */}
      <Row>
        <div className="about">
          <Col size="xs-3 md-2 md-offset-1">
            <center>
              <img
                className="col-xs-12 aboutImg img-circle img-responsive"
                src={require(`../styles/img/Dennis_2.jpg`)}
                alt="Dennis"
              />
            </center>
          </Col>
          <Col size="xs-8">
            <div className="team-heading-1">Dennis Alvey</div>
            <div className="team-heading-2">
              Front End Developer &amp; UI/UX Manager
            </div>
            <p>
              Dennis became interested in web deveopment when he learned that it was
              possible to record music in his bedroom. Once he got comfortable
              with using a DAW, the necessary skills to troubleshooting and
              starting a website were a necessity. He then became interested in the
              possibilities that web development held for him not only as a
              musician, but as a career.
            </p>
          </Col>
        </div>
      </Row>

      {/* Row #4 */}
      <Row>
        <div className="about about-4">
          <Col size="xs-3 md-2 md-offset-1">
            <center>
              <img
                className="col-xs-12 aboutImg img-circle img-responsive"
                src={require(`../styles/img/Brian_3.jpg`)}
                alt="Brian"
              />
            </center>
          </Col>
          <Col size="xs-8">
            <div className="team-heading-1">Brian Hart</div>
            <div className="team-heading-2">
              Back End Developer &amp; Git Master
            </div>
            <p>
              Brian currently teaches Algebra, Physics, and Robotics. He has been
              teaching at his current school for 11 years.
            </p>
          </Col>
        </div>      
      </Row>

      {/* Row #5 */}
      <Row>
        <div className="about"> 
          <Col size="xs-3 md-2 md-offset-1">
            <center>
              <img
                className="col-xs-12 aboutImg img-circle img-responsive"
                src={require(`../styles/img/Tatianna_3.jpg`)}
                alt="Tatianna"
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
              front and backend technologies and multiple languagues. Other
              relevant skills include Public Speaking, Microsoft Powerpoint
              Presentations, and leadership capabilities. Strong engineering
              professional with a Bachelor of Science (B.S.) focused in Applied
              Mathematics from California State University, Long Beach.
            </p>
          </Col>
        </div>
      </Row>
    </Container>
  </div>
);

export default About;
