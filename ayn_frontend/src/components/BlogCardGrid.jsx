import { Badge, Button, Card, Col } from 'react-bootstrap'

const BlogCardGrid = ({ title, images, badge }) => {
  return (
    <Col className="col-12 col-md-6 py-2">
        <Card>
            <Card.Img variant="top" src={images} alt="binary code of ones and zeros"
        className="img-fluid" />

            <Card.Body className='my-2'>
              <div className="d-flex justify-content-between">
                <Card.Title className='mb-2 text-secondary'>{title}</Card.Title>
                { badge && <Badge bg="secondary">New</Badge>} 
              </div>
              <Button className='mt-2' type="button" variant="outline-danger" href="#">إقرأ المزيد</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default BlogCardGrid