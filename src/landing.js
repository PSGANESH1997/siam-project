import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function DarkVariantExample() {
  return (
    <div className="carousel--1">
      <Carousel variant="dark">
        <Carousel.Item>
        <Card style={{ width: "213.31px", height: "110.08px", border: "none"}}>
          <Card style={{ width: "170.64px", height: "110px", border: "none" ,paddingTop:'1px',position:'absolute' , left:'50%' }}>
            <Card.Img
              variant="top"
              src="https://siamcomputing.com/wp-content/uploads/2022/05/NWS-logo-removebg-preview.png"
            />
          </Card>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "213.31.px", height: "110.08px",border: "none" }}>
            <Card style={{ width: "83px", height: "83px", border: "none",paddingTop:'12px',position:'absolute' , left:'45%' }}>
              <Card.Img
                variant="top"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/Navya-logo-removebg-preview.png"
              />
            </Card>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "213.31.px", height: "110.08px" ,border: "none"}}>
            <Card style={{ width: "123.72px", height: "82.33px", border: "none",paddingTop:'15px',position:'absolute' , left:'45%' }}>
              <Card.Img
                variant="top"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/Detect-logo-removebg-preview.png"
              />
            </Card>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "213.31.px", height: "110.08px" ,border: "none"}}>
            <Card style={{ width: "85.31px", height: "85.31px", border: "none",paddingTop:'10px' ,position:'absolute' , left:'45%'}}>
              <Card.Img
                variant="top"
                src="https://siamcomputing.com/wp-content/uploads/2022/07/Xcode-logo.png"
              />
            </Card>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "213.31.px", height: "110.08px",border: "none" }}>
            <Card style={{ width: "95.98px", height: "95.98px", border: "none" ,paddingTop:'5px',position:'absolute' , left:'45%'}}>
              <Card.Img
                variant="top"
                src="https://siamcomputing.com/wp-content/uploads/elementor/thumbs/SPI-Cinemas-Logo-removebg-preview-pr2ecblb60iwjppbtttj7lrevoww6dctordc2uljgs.png"
              />
            </Card>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "213.31.px", height: "110.08px" ,border: "none"}}>
            <Card style={{ width: "149.31px", height: "25.22px", border: "none",paddingTop:'40px',position:'absolute' , left:'45%' }}>
              <Card.Img
                variant="top"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/I-wanna-learn-logo.png"
              />
            </Card>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
