import images from "../constants/images"
import { Col, Container, Row } from 'react-bootstrap'
import BlogCardGrid from "./BlogCardGrid"

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
                <BlogCardGrid title={"التعلم الذاتي"} images={images.blog01} badge={false} />
                <Col className="col-12 col-md-6">
                    <Row className="row py-2">
                        <BlogCardGrid title={"التعلم الذاتي"} images={images.blog02} badge={false} />
                        <BlogCardGrid title={"التعلم الذاتي"} images={images.blog03} badge={true} />
                    </Row>
                    <Row className="py-2">
                        <BlogCardGrid title={"التعلم الذاتي"} images={images.blog04} badge={false} />
                        <BlogCardGrid title={"التعلم الذاتي"} images={images.blog05} badge={false} />
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog