import { Container } from "react-bootstrap"
import { FaArrowCircleUp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-secondary p-5 mt-3 text-center text-white position-relative">
        <i className="bi bi-arrow-up-circle h1"></i>
        <Container>
            <p className="lead">All Rights &copy; Reserved 2023 @AYN</p>

            <a href="#" className="position-absolute bottom-0 end-0 p-5">
                <FaArrowCircleUp className="fs-3 text-light" />
            </a>
        </Container>
    </footer>
  )
}

export default Footer