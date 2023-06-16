import { Button, Card, Col } from 'react-bootstrap'

const BlogCardGrid = ({ title, images }) => {
  return (
    <Col className="col-12 col-md-6 py-2 text-center">
        <Card>
            <Card.Img variant="top" src={images} alt="binary code of ones and zeros"
        className="img-fluid" />

            <Card.Body className='my-2'>
                <Card.Title className='mb-2 text-secondary'>{title}</Card.Title>
                <Button className='mt-2' type="button" variant="outline-danger" href="#">إقرأ المزيد</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default BlogCardGrid