import React from "react";
import "./Section.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaIndent,FaItchIo,FaIdCard} from "react-icons/fa";

const Section = () => {
  return (

    <>

    <CardGroup>
      <Card className="card-item-align-why">
        <Card.Body>
          <Card.Title className="text-title-align"><h3 className="card-title-name-style">Why Us.</h3></Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>  
    <CardGroup className="cardgroup-layout">
      <Card className="card-item-align">
        <Card.Img variant="top" src="https://siamcomputing.com/wp-content/uploads/2022/05/branding-300x300.png" className="card-img-icon-pgn"/>
        <Card.Body>
          <Card.Title ><h5 className="content--card--title">Skin in the game</h5></Card.Title>
          <Card.Text>
           <p className="p-tag-style">We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card-item-align">
        <Card.Img variant="top" src="https://siamcomputing.com/wp-content/uploads/2022/05/app-development-300x300.png" className="card-img-icon-pgn"/>
        <Card.Body>
          <Card.Title ><h5 className="content--card--title">Product Mindset</h5></Card.Title>
          <Card.Text>
          <p className="p-tag-style">From the product manager all the way down to the engineer. Everyone is aligned on doing what is right for the user. We invest time and money learning frameworks and ideas that help our startup founders.{' '}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card-item-align">
        <Card.Img variant="top" src="https://siamcomputing.com/wp-content/uploads/2022/05/app-development-300x300.png" className="card-img-icon-pgn"/>
        <Card.Body>
          <Card.Title className="card-title-name-style"><h5 className="content--card--title">Developing for Scale</h5></Card.Title>
          <Card.Text>
          <p className="p-tag-style"> We understand you are solving problems with a large impact. At every step of the way, our dev team uses world-class practices to ensure whatever is built stands the test of time and scale.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </>



    // <>
    //   <div className="total-section">
    //     <Container fluid="md">
    //       <Row>
    //         <Col lg={12}>
    //           <div className="why-content--1">
    //             <div className="why-content-2">
    //               <h3 className="why-content-header">Why Us.</h3>
    //             </div>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Container>
    //     <Container>
    //       <div className="why-first--1">
    //         <Row>
    //           <Col lg={4}>
    //             <div className="col--card--first">
    //                 <Container>
    //                     <Row>
    //                         <Col lg={12}>
    //                            <div className="col-card-content-1">
    //                                <a href="/" className="fa-icon-size"><FaIndent/></a>
    //                                {/* <img src={"../Asset/sodapdf-converted.jpg"} alt="img" loading="lazy" className="header-image-icon"/> */}
    //                            </div>
    //                         </Col>
    //                         <Col lg={12}>
    //                             <div className="col-card-content-2">
    //                                 <div>
    //                                     <h5 className="center-title">Skin in the game</h5>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                         <Col lg={12}>
    //                             <div className="col-card-content-3">
    //                                 <div>
    //                                     <p className="col-card-paragh">We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.</p>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                 </Container>
    //             </div>
    //           </Col>
    //           <Col lg={4}>
    //             <div className="col--card--first">
    //             <Container>
    //                     <Row>
    //                         <Col lg={12}>
    //                            <div className="col-card-content-1">
    //                                <i href="/" className="fa-icon-size"><FaItchIo/></i>
    //                                {/* <img src={"../Asset/sodapdf-converted.jpg"} alt="img" loading="lazy" className="header-image-icon"/> */}
    //                            </div>
    //                         </Col>
    //                         <Col lg={12}>
    //                             <div className="col-card-content-2">
    //                                 <div>
    //                                     <h5 className="center-title">Product Mindset</h5>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                         <Col lg={12}>
    //                             <div className="col-card-content-3">
    //                                 <div>
    //                                     <p className="col-card-paragh">From the product manager all the way down to the engineer. Everyone is aligned on doing what is right for the user. We invest time and money learning frameworks and ideas that help our startup founders.</p>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                 </Container>
    //             </div>
    //           </Col>
    //           <Col lg={4}>
    //           <div className="col--card--first">
    //           <Container>
    //                     <Row>
    //                         <Col lg={12}>
    //                            <div className="col-card-content-1">
    //                                <i className="fa-icon-size"><FaIdCard/></i>
    //                                {/* <img src={"../Asset/sodapdf-converted.jpg"} alt="img" loading="lazy" className="header-image-icon"/> */}
    //                            </div>
    //                         </Col>
    //                         <Col lg={12}>
    //                             <div className="col-card-content-2">
    //                                 <div>
    //                                     <h5 className="center-title">Developing for Scale</h5>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                         <Col lg={12}>
    //                             <div className="col-card-content-3">
    //                                 <div>
    //                                     <p className="col-card-paragh">We understand you are solving problems with a large impact. At every step of the way, our dev team uses world-class practices to ensure whatever is built stands the test of time and scale.</p>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                 </Container>
    //           </div>
    //           </Col>
    //         </Row>
    //       </div>
    //     </Container>
    //   </div>
    // </>
  );
};

export default Section;
