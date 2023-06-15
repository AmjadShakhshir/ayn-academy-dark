import { Col, Container, Row } from "react-bootstrap"
import images from "../constants/images"

const Opportunities = () => {
  return (
    <>
        <section>
            <Container className="container">
                <Row className="p-5">
                    <Col className="py-2 col-12 col-md-6">
                        <img src={images.possibility}
                        className="img-fluid"
                        alt="Woman using VR" />
                    </Col>
                    <Col className="py-2 col-12 col-md-6">
                        <span className="py-2">سارع في طلب الإنضمام اليوم والتحق بدوراتنا.</span>
                        <h3 className="py-2">فرص التطور والتعلم معنا أكبر مما تتخيل</h3>
                        <p className="py-2">حرصنا أثناء إعداد المناهج على أن تكون المادة عمليةً متينةً، وفي الوقت ذاته مفيدةً عملياً، كما حرصنا على أن تكون طريقة العرض والإعطاء مبدعة في الوسائل. لن نعتمد أسلوب التلقين في الأكاديمية، بل التدريب النشط التفاعلي، حيث ستكون لدينا مساحات واسعة من الحوارات التي نناقش فيها قضايا معاصرة مهمة، كما أننا سنعتمد على أسلوب الألعاب في تبسيط الأفكار وفي خلق جو من التحفيز والمتعة، وكذلك الأمر مع المسابقات والمناظرات. كما أن الشباب سيكونون شركاء معنا في المنصة في إعداد مشاريع ومنتجات تكون تطبيقاً لما سيتعلمونه وإضافة للمنهاج وللمنصة ككل.</p>
                        <span className="py-2">سارع في طلب الإنضمام اليوم والتحق بدوراتنا.</span>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container className="container">
                <Row className="p-5">
                    <Col className="col-12 col-md-6 py-2">
                        <span className="py-2">سارع في طلب الإنضمام اليوم والتحق بدوراتنا.</span>
                        <h4 className="py-2">سجل اليوم و تصفح عدد لا نهائي من الدورات المميزة</h4>
                    </Col>
                    <Col className="text-center">
                        <button className="btn btn-warning">إبدأ الآن</button>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Opportunities