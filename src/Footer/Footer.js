import React from "react";
import "./Footer.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaFacebookF,
  FaYoutube,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* <div className="over-all-layout">
        <Container className="main-container">
          <div className="main-div-1">
            <div className="main-div-2">
              <Row className="row-head--1">
                <Col lg={3}>
                  <div className="col-head--1">
                    <Row>
                      <Col sm={12}>
                        <div className="footer-logo-siam">
                          <a href="/">
                            <img
                              src="https://siamcomputing.com/wp-content/uploads/2021/09/footer-logo-siam.webp"
                              alt="footer-logo-siam"
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="mail-id">
                          <a
                            href="mailto:hello@siamcomputing.com"
                            className="footer-mail"
                          >
                            hello@siamcomputing.com
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="address">
                          <p>
                            No 30, 1st Main Road,
                            <br />
                            Shastri Nagar,
                            <br />
                            Adyar, Chennai,
                            <br />
                            Tamil Nadu 600020
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className="col-head--2">
                    <Row>
                      <Col sm={12}>
                        <div className="content--service">
                          <h6 className="col-service">Services</h6>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-product">
                          <a href="/" className="span--content-1">
                            <span>
                              Product strategy and consulting
                            </span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-product">
                          <a href="/" className="span--content-1">
                            <span>MVP Developement</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-product">
                          <a href="/" className="span--content-1">
                            <span>Dedicated Product Team</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="col-empty">
                        <div className=""></div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className="col-head--3">
                    <Row>
                      <Col sm={12}>
                        <div className="content--about">
                          
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-journey">
                          <a href="/" className="span--content-1">
                            <span>Our Journey</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-life">
                          <a href="/" className="span--content-1">
                            <span>Life at siam</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-careers">
                          <a href="/" className="span--content-1">
                            <span>Careers</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className="col-head--4">
                    <Row>
                      <Col sm={12}>
                        <div className="content--resources">
                          <h6 className="col-resourse">Resources</h6>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-blogs">
                          <a href="/" className="span--content-1">
                            <span>Blogs</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-case">
                          <a href="/" className="span--content-1">
                            <span>Case Studies</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-app">
                          <a href="/" className="span--content-1">
                            <span>App Development Guide</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="col-prod-dev">
                          <a href="/" className="span--content-1">
                            <span>Product dev guide</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <div className="social-media">
                <Row>
                  <div>
                    <a
                      href="https://www.facebook.com/siamcomputing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <i className="contect-size-icon">
                        <FaFacebookF />
                      </i>
                    </a>
                    <a
                      href="https://www.instagram.com/siamcomputing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://twitter.com/siamcomputing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/siam-computing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCM8_gcrXV5UEdBSbpm4bDRg/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.google.com/search?client=firefox-b-d&q=siamcomputing#lrd=0x3a526f51ad850473:0x91f450bbe794336c,1,,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaGooglePlusG />
                    </a>
                  </div>
                </Row>
              </div>
              <Row>
                <Col lg={12}>
                  <div className="divider">
                    <hr className="solid">
                      
                    </hr>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="copyright">
                    <p className="copyright--1">&#169; Copyright 2023 siamcomputing All Right Reserved.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div> */}
      <div className="card-footer-layout-view">
      <div className="main-container">
        <CardGroup className="group-card">
          <Card className="card-footer-layout">
            <Card.Body className="card-body-layout">
              <Card.Text>
                <a href="/">
                  <img
                    src="https://siamcomputing.com/wp-content/uploads/2021/09/footer-logo-siam.webp"
                    alt="footer-logo-siam"
                    loading="lazy"
                  />
                </a>
              </Card.Text>
              <Card.Text>
                <p className="p-tag-bottom"></p>
              </Card.Text>
              <Card.Text>
                <a
                  href="mailto:hello@siamcomputing.com"
                  className="footer-mail"
                >
                  hello@siamcomputing.com
                </a>
              </Card.Text>
              <Card.Text>
                <p className="address">
                  No 30, 1st Main Road,
                  <br />
                  Shastri Nagar,
                  <br />
                  Adyar, Chennai,
                  <br />
                  Tamil Nadu 600020
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-footer-layout">
            <Card.Body className="card-body-layout">
              <Card.Title>
                <h6 className="col-service">Services</h6>
              </Card.Title>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Product strategy and consulting</span>
                </a>
              </Card.Text>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>MVP Developement</span>
                </a>
              </Card.Text>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Dedicated Product Team</span>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-footer-layout">
            <Card.Body className="card-body-layout">
              <Card.Title>
                <h6 className="col-service">About</h6>
              </Card.Title>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Our Journey</span>
                </a>
              </Card.Text>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Life at siam</span>
                </a>
              </Card.Text>

              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Careers</span>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-footer-layout">
            <Card.Body className="card-body-layout">
              <Card.Title>
                <h6 className="col-service">Resources</h6>
              </Card.Title>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Blogs</span>
                </a>
              </Card.Text>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Case Studies</span>
                </a>
              </Card.Text>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>App Development Guide</span>
                </a>
              </Card.Text>
              <Card.Text>
                <a href="/" className="span--content-1">
                  <span>Product dev guide</span>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <div className="social-media">
                <Row>
                  <div className="margin-footer-icon">
                    <a
                      href="https://www.facebook.com/siamcomputing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <i className="contect-size-icon">
                        <FaFacebookF />
                      </i>
                    </a>
                    <a
                      href="https://www.instagram.com/siamcomputing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://twitter.com/siamcomputing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/siam-computing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCM8_gcrXV5UEdBSbpm4bDRg/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.google.com/search?client=firefox-b-d&q=siamcomputing#lrd=0x3a526f51ad850473:0x91f450bbe794336c,1,,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-1"
                    >
                      <FaGooglePlusG />
                    </a>
                  </div>
                </Row>
                <Row>
                <Col lg={12}>
                  <div className="divider">
                    <hr className="solid">
                      
                    </hr>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="copyright">
                    <p className="copyright--1">&#169; Copyright 2023 siamcomputing All Right Reserved.</p>
                  </div>
                </Col>
              </Row>
              </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
