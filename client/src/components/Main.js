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
            {/* Hero Video Section */}

            <section className="parallax">  
                <div className="hero">
                    <div className="hero-overlay wow fadeInUp">
                        <h1 style= {{'font-size':'120px', color:'#0060DF'}}>Goal Post</h1>
                        <h1>CRM System <br />for Busy Salespeople </h1>
                    </div>
                    <video width="100%" height="auto" autoPlay loop muted
                        poster={require('../styles/img/business_meeting.jpg')}>
                        <source src={require('../styles/img/business-meeting-720HD.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            
                </div>                
            </section>

            {/* Why Section */}
            <section className="parallax parallax-1" id="why">
                <div className="container section-heading wow fadeInUp" id="why-header">
                    <Row>
                        <Col size="xs-12">
                            <h1>Why Us?</h1>
                            <h2>Our Competitive Advantages</h2>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Why Section */}
            <section id="why-content">
                <div className="container content wow fadeInUp">
                    <center>
                        <Row>
                            <Col size="xs-12 sm-6 lg-3">
                                <div className="item">
                                    <a className="fa"><i className="fa fa-mobile" aria-hidden="true"></i></a>
                                    <h3>Responsive <br />Design</h3>
                                    <p>Use it on your computers, tablets, and on phones.</p>
                                </div>
                            </Col>
                            <Col size="xs-12 sm-6 lg-3">
                                <div className="item">
                                    <a className="fa"><i className="fa fa-users" aria-hidden="true"></i></a>
                                    <h3>Information <br />Sharing</h3>
                                    <p>Share information such as product inventory within the team.</p>
                                </div>
                            </Col>
                            <Col size="xs-12 sm-6 lg-3">
                                <div className="item">
                                    <a className="fa"><i className="fa fa-cloud" aria-hidden="true"></i></a>
                                    <h3>No Software <br /> Needed</h3>
                                    <p>Easily access all your data anywhere with Internet connection.</p>
                                </div>
                            </Col>
                            <Col size="xs-12 sm-6 lg-3">
                                <div className="item">
                                    <a className="fa"><i className="fa fa-lock" aria-hidden="true"></i></a>
                                    <h3>Secure<br />User Data</h3>
                                    <p>Your data is secure with our technology.</p>
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
            </section>
            <section id="features-content">
                <div className="container content wow fadeInUp">
                    <center>
                        <Row>
                            <Col size="xs-12 sm-4 sm-offset-2">
                                <a className="fa"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
                                <h3>Dashboard</h3>
                                <p>Quickly find out how much progress you made towards monthly or weekly sales goals.</p>
                            </Col>
                            <Col size="xs-12 sm-4">
                                <a className="fa"><i className="fa fa-database" aria-hidden="true"></i></a>
                                <h3>Database <br /> Management</h3>
                                <p>Easily add and update your customers' information and product details.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-12 sm-4 sm-offset-2">
                                <a className="fa"><i className="fa fa-calendar" aria-hidden="true"></i></a>
                                <h3>Schedule</h3>
                                <p>Use our calendar to plan your sales meeting and delivery schedule.</p>
                            </Col>
                            <Col size="xs-12 sm-4">
                                <a className="fa"><i className="fa fa-car" aria-hidden="true"></i></a>
                                <h3>Optimized <br />Driving Route</h3>
                                <p>Plan your sales trip to multiple customers with our optimized driving routes.</p>
                            </Col>
                        </Row>
                    </center>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="parallax parallax-3" id="testimonials">
                <div className="container section-heading wow fadeInUp">
                    <Row>
                        <Col size="xs-12">
                            <h1>Testimonials</h1>
                            <h2>What Our Clients Are Saying</h2>
                        </Col>
                    </Row>                    
                </div>
            </section>
            <section>
                <Container className="content wow fadeInUp">
                    <Row>
                        <div id="testimonial" className="carousel fade-carousel slide testimonial_indicators testimonial_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="3500" data-duration="2000">
                            {/* <div className="testimonial_header">
                                <h4>what our clients are saying</h4>
                            </div> */}

                            {/* <!-- Indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#testimonial" data-slide-to="0" className="active"></li>
                                <li data-target="#testimonial" data-slide-to="1"></li>
                                <li data-target="#testimonial" data-slide-to="2"></li>
                            </ol>

                            {/* <!-- Wrapper for slides --> */}
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="testimonial_slide">
                                        <img src={require(`../styles/img/t-1.jpg`)} className="img-circle img-responsive" />
                                        <h5><i>"I love Goal Post! Great tool to keep track of my customer information, sales notes, and plan my clients visits."</i></h5>
                                        <h5>- Alex</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial_slide">
                                        <img src={require(`../styles/img/t-2.jpg`)} className="img-circle img-responsive" />
                                        <h5><i>"I wish I knew about Goal Post years earlier. Every salesperson should use GoalPost."</i></h5>
                                        <h5>- Brandon</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial_slide">
                                        <img src={require(`../styles/img/t-3.jpg`)} className="img-circle img-responsive" />
                                        <h5><i>"No more piles of sales notes. With Goal Post, now I can keep my customer records digitally in the cloud."</i></h5>
                                        <h5>- Lisa</h5>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Left and right controls --> */}
                            <a className="left carousel-control" href="#testimonial" role="button" data-slide="prev">
                                <span className="fa fa-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#testimonial" role="button" data-slide="next">
                                <span className="fa fa-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            
            {/* Team Section */}
            <section className="parallax parallax-4" id="team">
                <div className="container section-heading wow fadeInUp">
                    <Row>
                        <Col size="xs-12">
                        <h1>Meet Our Team</h1>
                        <h5><a href="/about">Learn More</a></h5>
                        </Col>
                    </Row>                    
                </div>
            </section>
            <section>
            <center>
                <Container className="content team wow fadeInUp">
                    {/* Row #1 */}
                    <Row>
                        <Col size="md-4 sm-4">
                            <img className="aboutImg img-circle" src={require(`../styles/img/jeannine.jpg`)} />
                            <h4>Jeanine Smith</h4>
                            <p>Project Manager</p>
                        </Col>

                        <Col size="md-4 sm-4">
                            <img className="aboutImg img-circle" src={require(`../styles/img/Guiyu.jpg`)} />
                            <h4>Guiyu (Zoey) Zhao  </h4>
                            <p>Front End Developer &amp; QA Manager</p>
                        </Col>

                        <Col size="md-4 sm-4">
                            <img className="aboutImg img-circle" src={require(`../styles/img/Dennis.jpg`)} />
                            <h4>Dennis Alvey</h4>
                            <p>Front End Developer &amp; UI/UX Manager</p>
                        </Col>
                    </Row>

                    {/* Row #2 */}
                    <Row>
                        <Col size="md-6 sm-6">
                            <img className="aboutImg img-circle" src={require(`../styles/img/Brian.jpg`)} />
                            <h4>Brian Hart  </h4>
                            <p>Back End Developer &amp; Git Master</p>
                        </Col>

                        <Col size="md-6 sm-6">
                            <img className="aboutImg img-circle" src={require(`../styles/img/Tatianna.jpg`)} />
                            <h4>Tatianna Watwood</h4>
                            <p>Back End Developer &amp; Code Review Manager</p>
                        </Col>
                    </Row>

                </Container>
                </center>
            </section>
        </div>
    );
}   
}
export default Main;
