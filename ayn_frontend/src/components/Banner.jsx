import { Container } from "react-bootstrap"

const Banner = () => {
  return (
    <section className="bg-warning bg-gradient">
        <Container className="container text-center p-5">
            <h1 className="h1 py-2">اكتشاف كيفية التوقع والتكيف مع أحدث الاتجاهات والرقمية</h1>
            <button className="btn btn-outline-danger py-2 mt-3">قدم طلبك الآن</button>
        </Container>
    </section>
  )
}

export default Banner