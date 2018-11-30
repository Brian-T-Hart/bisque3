import React from "react";
import { Col, Row, Container } from "../Grid";
import Nav from "../Nav";

const NoMatch = () =>
<div>
  <Nav />
  <section id="no-match" className="short-page">
    <Container>
      <Row>
        <Col size="xs-12">
          <h1>Sorry, page not found.</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Col>
      </Row>
    </Container>

  </section>
</div>

export default NoMatch;
