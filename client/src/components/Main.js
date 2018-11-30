import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import { Col, Row, Container } from "./Grid";
import Footer from "./Footer";
import General from "../styles/General.css";
import Jumbotron from "./Jumbotron";
import Customers from "./Customers";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Login from "./Login";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* Hero Video Section */}

        <section className="parallax">
          <div className="hero">
            <div className="hero-overlay wow fadeInUp container">
              <Row>
                <Col size="xs-12">
                  <h1>
                    Goal Post
                  </h1>
                  <h2>
                  Free CRM built for small business success
                  </h2>
                  <h2 className="note">100% free. Immediate access. No credit card required.</h2>
                  <center>
                    <a href="/register" className="btn btn-primary">Sign Up for Free</a>
                  </center>
                </Col>
              </Row>
            </div>
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              poster={require("../styles/img/business_meeting.jpg")}
            >
              <source
                src={require("../styles/img/business-meeting-720HD.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Why Section */}
        <section className="parallax parallax-1 over" id="why">
          <div
            className="container section-heading wow fadeInUp"
            id="why-header"
          >
            <Row>
              <Col size="xs-12">
                <h1>Why Goal Post</h1>
                <h2>Our Competitive Advantages</h2>
              </Col>
            </Row>
          </div>
        </section>

        {/* Why Section */}
        <section id="why-content">
          <div className="container content">
            <center>
              <Row>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInLeft">
                    <a className="fa">
                      <i className="fa fa-mobile" aria-hidden="true" />
                    </a>
                    <h3>
                      Responsive <br />
                      Design
                    </h3>
                    <p>Use it on your computers, tablets, and on phones.</p>
                  </div>
                </Col>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInLeft">
                    <a className="fa">
                      <i className="fa fa-users" aria-hidden="true" />
                    </a>
                    <h3>
                      Information <br />
                      Sharing
                    </h3>
                    <p>
                      Share information such as product inventory within the
                      team.
                    </p>
                  </div>
                </Col>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInRight">
                    <a className="fa">
                      <i className="fa fa-cloud" aria-hidden="true" />
                    </a>
                    <h3>
                      No Software <br /> Needed
                    </h3>
                    <p>
                      Easily access all your data anywhere with Internet
                      connection.
                    </p>
                  </div>
                </Col>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInRight">
                    <a className="fa">
                      <i className="fa fa-lock" aria-hidden="true" />
                    </a>
                    <h3>
                      Secure
                      <br />
                      User Data
                    </h3>
                    <p>
                      Your company and user data is secure with our technology.
                    </p>
                  </div>
                </Col>
              </Row>
            </center>
          </div>
        </section>

        {/* Features Section */}
        <section className="parallax parallax-2" id="features">
          <div className="container section-heading wow fadeInUp">
            <Row>
              <Col size="xs-12">
                <h1>Features</h1>
                <h2>4 Ways We Can Make Your Life Easier</h2>
              </Col>
            </Row>
          </div>
          <div className="container content" id="features-content">
            <center>
              <Row>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInLeft">
                    <a className="fa">
                      <i className="fa fa-line-chart" aria-hidden="true" />
                    </a>
                    <h3>
                      Sales <br />
                      Dashboard
                    </h3>
                    <p>
                      Quickly find out how much progress you made towards
                      monthly or weekly sales goals.
                    </p>
                  </div>
                </Col>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInLeft">
                    <a className="fa">
                      <i className="fa fa-database" aria-hidden="true" />
                    </a>
                    <h3>
                      Database <br /> Management
                    </h3>
                    <p>
                      Easily add and update your customers' information and
                      product details.
                    </p>
                  </div>
                </Col>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInRight">
                    <a className="fa">
                      <i className="fa fa-calendar" aria-hidden="true" />
                    </a>
                    <h3>
                      Meeting
                      <br />
                      Schedule
                    </h3>
                    <p>
                      Use our calendar to plan your sales meeting and/or product
                      delivery schedule.
                    </p>
                  </div>
                </Col>
                <Col size="xs-12 sm-6 lg-3">
                  <div className="item wow fadeInRight">
                    <a className="fa">
                      <i className="fa fa-car" aria-hidden="true" />
                    </a>
                    <h3>
                      Optimized <br />
                      Driving Route
                    </h3>
                    <p>
                      Plan your sales trip to multiple customers with our
                      optimized driving routes.
                    </p>
                  </div>
                </Col>
              </Row>
            </center>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="parallax parallax-3 over" id="testimonials">
          <div className="container section-heading wow fadeInUp">
            <Row>
              <Col size="xs-12">
                <h1>Testimonials</h1>
                <h2>What Our Clients Are Saying</h2>
              </Col>
            </Row>
          </div>
        </section>
        <section id="testimonial-content">
          <div className="container content wow fadeInUp">
            <Row>
              <Col size="xs-12">
                <div
                  id="testimonial"
                  className="carousel fade-carousel slide testimonial_indicators testimonial_control_button thumb_scroll_x swipe_x"
                  data-ride="carousel"
                  data-pause="hover"
                  data-interval="3500"
                  data-duration="2000"
                >
                  {/* <!-- Indicators --> */}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#testimonial"
                      data-slide-to="0"
                      className="active"
                    />
                    <li data-target="#testimonial" data-slide-to="1" />
                    <li data-target="#testimonial" data-slide-to="2" />
                  </ol>

                  {/* <!-- Wrapper for slides --> */}
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <div className="testimonial_slide">
                        <img
                          src={require(`../styles/img/t-1.jpg`)}
                          className="img-circle img-responsive"
                        />
                        <h5>
                          "I love Goal Post! Great tool to keep track of my
                          customer information, sales notes, and plan my clients
                          visits."
                        </h5>
                        <h6>- Alex</h6>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial_slide">
                        <img
                          src={require(`../styles/img/t-2.jpg`)}
                          className="img-circle img-responsive"
                        />
                        <h5>
                          "I wish I knew about Goal Post years earlier. Every
                          salesperson should use GoalPost."
                        </h5>
                        <h6>- Brandon</h6>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial_slide">
                        <img
                          src={require(`../styles/img/t-3.jpg`)}
                          className="img-circle img-responsive"
                        />
                        <h5>
                          "No more piles of sales notes. With Goal Post, now I
                          can keep my customer records digitally in the cloud."
                        </h5>
                        <h6>- Lisa</h6>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Left and right controls --> */}
                  <a
                    className="left carousel-control"
                    href="#testimonial"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="fa fa-chevron-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#testimonial"
                    role="button"
                    data-slide="next"
                  >
                    <span className="fa fa-chevron-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Team Section */}
        <section className="parallax parallax-4" id="team">
          <div className="container section-heading wow fadeInUp">
            <Row>
              <Col size="xs-12">
                <h1>Meet Our Team</h1>
                <h2>
                  <a href="/about">Learn More</a>
                </h2>
              </Col>
            </Row>
          </div>
        </section>

        {/* Contact Section */}
        {/* Zotabox Contact Form Embed */}
        <section id="contact" className="over">
          <Container>
            <Row>
              <Col size="xs-12">
                <div className="contact-form section-heading wow fadeInUp">
                <h1>Contact Us</h1>
                  <center>
                    <div
                      style={{ padding: "0" }}
                      id="zbwid-e422a183"
                    />
                  </center>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default Main;
