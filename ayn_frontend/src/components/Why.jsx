import { Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Why = () => {
  return (
    <section className="p-5" id="why">
        <Container className="container">
            <Row className="p-3 d-flex flex-column flex-lg-row ">
                <Col>
                    <h3>لماذا عين !؟</h3>
                </Col>
                <Col>
                    <p>في عالمٍ مليءٍ بالنداءات والدعوات صاخبٍ بالضجيج والتيارات تشغلنا فيه الحيرة والتساؤلات نحتاج إلى عين... عينٍ صافيةٍ عذبةٍ ننهل منها لنروي ظمأ أسئلتنا، عن الوجود والحياة، عن دورنا فيها، عن السعادة ما هي وكيف نجنيها !؟ عن الإنسان ما هو !؟ وإلى أين يسير؟
                    </p>
                </Col>
            </Row>
            <Row className="py-5">
                <Col className="col-8">
                    <h2>فرص التطور والتعلم معنا أكبر مما تتخيل</h2>
                </Col>
                <Col className="col-4 text-center">
                {/* Edit the link */}
                    <LinkContainer to="/">
                        <span>تصفح المكتبة</span>
                    </LinkContainer>
                </Col>
            </Row>
            <Row className="row text-center">
                <Col className="p-2 col-12 col-md-4">
                    <h5>الإبداع</h5>
                    <p>مناهج منصة عين هي مناهج أصيلة، قام فريق المنصة بتأليفها وتطويرها وتحويلها إلى دورات ونشاطات وألعاب بما يحقق الفائدة والمتعة للطلاب/المتدربين.
                    </p>
                </Col>
                <Col className="p-2 col-12 col-md-4">
                    <h5>العملية</h5>
                    <p>لا يوجد شيء من مناهج ودورات منصة عين ليس له تطبيق عملي، بل هي متفاعلة بشكل تام مع الواقع لفهمه بشكل أفضل وللتعامل معه ولتغييره.
                    </p>
                </Col>
                <Col className="p-2 col-12 col-md-4">
                    <h5>المنهجية</h5>
                    <p>شبر من معرفة منهجية خير من بحر من المعلومات المبعثرة، لذلك نركز في المنصة على أن تقدم المناهج معرفة حقيقية تساعد في تنظيم العقل وتزيد فاعليته، لا تشتته ولا توهمه بمعرفة مزيفة.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Why