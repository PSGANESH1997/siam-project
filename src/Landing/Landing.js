import React from "react";
import "./Landing.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Corouse from "./Carouse";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const landing = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="landing-row-code">
            <Row>
              <h1 className="content--1">
                <strong>Startups need to scale fast. We get it.</strong>
              </h1>
            </Row>
            <Row>
              <div className="content--2 header-button-land">
                Our skin in the game philosophy enables multiple iterations,
                lower cash burn and a faster road to product-market fitment
              </div>
            </Row>
            <Row className="header-button-land">
              <Button
                variant="outline-danger"
                size="lg"
                className="header-button"
              >
                Book a free call
              </Button>{" "}
            </Row>
            <Row></Row>
          </Col>
          <Col>
            <Row>
              <CardGroup>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://siamcomputing.com/wp-content/uploads/elementor/thumbs/slazzer-edit-image-2-pr2h3azl01wsmnnzuf26gsmaedcx6w8oys4nblgmc4.png"
                    className="landing-pgn"
                  />
                </Card>
              </CardGroup>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Corouse />
      </Container>
    </>
  );
};

export default landing;
