import images from "../constants/images"
import { Col, Container, Row } from 'react-bootstrap'

const Blog = () => {
  return (
    <section>
        <Container className="container">
            <Row className="p-5">
                <Col className="col-12">
                    <h3>أكاديمية عين هي العنوان، هناك الكثير من دورات العلم والمعرفة.</h3>
                </Col>
            </Row>
            <Row className="p-2">
                <Col className="col-12 col-md-6">
                    <img src={images.blog01}
                    alt="binary code of ones and zeros"
                    className="img-fluid" />
                    
                </Col>
                <Col className="col-12 col-md-6">
                    <Row className="row py-2">
                        <Col className="col-12 col-md-3 py-2">
                            <img src={images.blog02}
                            alt="blog2"
                            className="img-fluid" />
                            
                        </Col>
                        <Col className="col-12 col-md-3 py-2">
                            <img src={images.blog03}
                            alt="blog3"
                            className="img-fluid" />
                            
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="col-12 col-md-3 py-2">
                            <img src={images.blog04}
                            alt="blog4"
                            className="img-fluid" />
                            
                        </Col>
                        <Col className="col-12 col-md-3 py-2">
                            <img src={images.blog05}
                            alt="blog5"
                            className="img-fluid" />
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog