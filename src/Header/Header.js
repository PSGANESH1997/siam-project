import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    // <CardGroup>
    //   <Card className="siam-header">
    //     <Card.Body>
    //       <Container>
    //         <Row>
    //           <Col lg={2}>
    //             <div className="header-first--1">
    //               <Container>
    //                 <Navbar.Brand href="#home">
    //                   <img
    //                     src="https://siamcomputing.com/wp-content/uploads/2021/09/siam-computing-trans.png"
    //                     className="siam-logo"
    //                     alt=""
    //                   ></img>
    //                 </Navbar.Brand>
    //               </Container>
    //             </div>
    //           </Col>
    //           <Col lg={7}>
    //             <div className="header-second--1">
    //               <Navbar collapseOnSelect expand="lg" variant="light">
    //                 <Container>
    //                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //                   <Navbar.Collapse id="responsive-navbar-nav">
    //                     <Nav className="ms-auto">
    //                       <NavDropdown
    //                         title="Services"
    //                         id="collasible-nav-dropdown"
    //                       >
    //                         <NavDropdown.Item href="#action/3.1">
    //                           Product Strategy And Consulting
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.2">
    //                           MVP Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.3">
    //                           Dedicated Product Team
    //                         </NavDropdown.Item>
    //                       </NavDropdown>

    //                       <NavDropdown
    //                         title="Skills"
    //                         id="collasible-nav-dropdown"
    //                       >
    //                         <NavDropdown.Item href="#action/3.1">
    //                           Mobile App Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.2">
    //                           Hybrid App Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.3">
    //                           React Native Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.4">
    //                           Progressive Web App Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.5">
    //                           Web Portal Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.6">
    //                           Enterprise Web App Development
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.7">
    //                           Chatbot
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.8">
    //                           DevOps Services
    //                         </NavDropdown.Item>
    //                       </NavDropdown>
    //                       <NavDropdown
    //                         title="About"
    //                         id="collasible-nav-dropdown"
    //                       >
    //                         <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.2">
    //                           Another action
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.3">
    //                           Something
    //                         </NavDropdown.Item>
    //                       </NavDropdown>
    //                       <NavDropdown
    //                         title="Resources"
    //                         id="collasible-nav-dropdown"
    //                       >
    //                         <NavDropdown.Item href="#action/3.1">
    //                           a
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.2">
    //                           Another action
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.3">
    //                           Something
    //                         </NavDropdown.Item>
    //                       </NavDropdown>
    //                     </Nav>

    //                     <Col lg={3}>
    //                       <div className="header-third--1">
    //                         <Container>
    //                           <Button
    //                             variant="outline-danger"
    //                             size="lg"
    //                             className="header-button"
    //                           >
    //                             Book a free call
    //                           </Button>{" "}
    //                         </Container>
    //                       </div>
    //                     </Col>
    //                   </Navbar.Collapse>
    //                 </Container>
    //               </Navbar>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>

    <>
      <Container className="container-header-nav">
        <Navbar expand="md">
          <Navbar.Brand href="#">
            <img
              src="https://siamcomputing.com/wp-content/uploads/2021/09/siam-computing-trans.png"
              className="siam-logo"
              alt=""
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleOffcanvas}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto dropdown-margin">
              <NavDropdown title="Services" className="services-nav">
                <NavDropdown.Item href="#">
                  Product Strategy And Consulting
                </NavDropdown.Item>
                <NavDropdown.Item href="#">MVP Development</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Dedicated Product Team
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Skills">
                <NavDropdown.Item href="#action/3.1">
                  Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Hybrid App Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  React Native Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Progressive Web App Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Web Portal Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Enterprise Web App Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Chatbot</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">
                  DevOps Services
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About">
                <NavDropdown.Item href="#action/3.1">
                  Our Journey
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Life At Siam
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Guides">
                <NavDropdown.Item href="#action/3.1">
                  App Developement
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Product Dev Guide
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Newsletter
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#contact" onClick={toggleOffcanvas}>
                Contact
              </Nav.Link> */}
            </Nav>
            <div className="header-third--1">
              <Container>
                <Button
                  variant="outline-danger"
                  size="md"
                  className="header-button button-position"
                >
                  Book a free call
                </Button>{" "}
              </Container>
            </div>
          </Navbar.Collapse>
          <Offcanvas
            show={showOffcanvas}
            onHide={toggleOffcanvas}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <NavDropdown title="Services">
                  <NavDropdown.Item href="#">
                    Product Strategy And Consulting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">MVP Development</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Dedicated Product Team
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Skills">
                  <NavDropdown.Item href="#action/3.1">
                    Mobile App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Hybrid App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    React Native Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Progressive Web App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Web Portal Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Enterprise Web App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">
                    Chatbot
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">
                    DevOps Services
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="About">
                  <NavDropdown.Item href="#action/3.1">
                    Our Journey
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Life At Siam
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Careers
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Guides">
                  <NavDropdown.Item href="#action/3.1">
                    App Developement
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Product Dev Guide
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Newsletter
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#contact" onClick={toggleOffcanvas}>
                Contact
              </Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
