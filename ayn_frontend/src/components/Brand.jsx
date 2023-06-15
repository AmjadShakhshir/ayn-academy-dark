import images from "../constants/images"
import { Col, Container } from 'react-bootstrap'

const Brand = () => {
  return (
      <Col
            xs={{ order: 1 }}
            md={{ order: 2 }}
            tag="section"
            className="py-5 mb-5 bg-dark"
          >
      <Container className="container">
        <ul className="list-unstyled list-inline d-flex flex-wrap justify-content-evenly">
          <li className="list-inline-item">
            <img src={images.slack} alt="brand-1" className="img-fluid" />
          </li>
          <li className="list-inline-item">
            <img src={images.shopify} alt="brand-2" className="img-fluid" />
          </li>
          <li className="list-inline-item">
            <img src={images.google} alt="brand-3" className="img-fluid" />
          </li>
          <li className="list-inline-item">
            <img src={images.dropbox} alt="brand-4" className="img-fluid" />
          </li>
          <li className="list-inline-item">
            <img src={images.atlassian} alt="brand-5" className="img-fluid" />
          </li>
        </ul>
      </Container>
    </Col>
  )
}

export default Brand