import images from "../constants/images"
import { Card, Col, Container, Row } from 'react-bootstrap'

const Blog = () => {
  return (
    <section className="bg-secondary-subtle">
        <Container className="container">
            <Row className="p-5">
                <Col className="col-12">
                    <h3>أكاديمية عين هي العنوان، هناك الكثير من دورات العلم والمعرفة.</h3>
                </Col>
            </Row>
            <Row className="p-2">
                <Col className="col-12 col-md-6 py-2">
                    <Card>
                        <Card.Img variant="top" src={images.blog01} alt="binary code of ones and zeros"
                    className="img-fluid" />

                        <Card.Body>
                            <Card.Title>التعلم الذاتي</Card.Title>
                            <Card.Link href="#">إقرأ المزيد</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-md-6">
                    <Row className="row py-2">
                        <Col className="col-12 col-md-6 py-2">
                            <Card>
                                <Card.Img variant="top" src={images.blog02} alt="binary code of ones and zeros"
                            className="img-fluid" />

                                <Card.Body>
                                    <Card.Title>التعلم الذاتي</Card.Title>
                                    <Card.Link href="#">إقرأ المزيد</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-12 col-md-6 py-2">
                            <Card>
                                <Card.Img variant="top" src={images.blog03} alt="binary code of ones and zeros"
                            className="img-fluid" />

                                <Card.Body>
                                    <Card.Title>التعلم الذاتي</Card.Title>
                                    <Card.Link href="#">إقرأ المزيد</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="col-12 col-md-6 py-2">
                            <Card>
                                <Card.Img variant="top" src={images.blog04} alt="binary code of ones and zeros"
                            className="img-fluid" />

                                <Card.Body>
                                    <Card.Title>التعلم الذاتي</Card.Title>
                                    <Card.Link href="#">إقرأ المزيد</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-12 col-md-6 py-2">
                            <Card>
                                <Card.Img variant="top" src={images.blog05} alt="binary code of ones and zeros"
                            className="img-fluid" />

                                <Card.Body>
                                    <Card.Title>التعلم الذاتي</Card.Title>
                                    <Card.Link href="#">إقرأ المزيد</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog