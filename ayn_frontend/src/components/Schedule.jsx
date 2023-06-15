import { Col, Container, Row } from 'react-bootstrap'
import { BiCalendar,BiTime } from 'react-icons/bi'
import { BsListCheck } from 'react-icons/bs'

const Schedule = () => {
  return (
    <section className='bg-light bg-gradient'>
      <Container className='container'>
        <Row className='p-5'>
          <Col className='col-12'>
            <span className='col-12'>مدة الأكاديمية عامٌ كامل، يكون فيها التواصل الرئيسي عبر لقاءات أون لاين، تعطى فيها الدورات التدريبية، وتدار فيها اللقاءات والحوارات والفعاليات المختلفة.</span>
            <h3 className='col-12'>توزيع اللقاءات سيكون على الشكل التالي:</h3>
            <p className='col-12'>لقاءان أسبوعياً، مدة كل لقاء ساعة ونصف وهو يتضمن حصتين تدريبيتين.</p>
            <ul className='list-unstyled d-flex flex-column flex-md-row py-2'>
              <li className='col-12 col-md-4 py-2'><BiCalendar className='align-self-center'/> ٢ لقاء أسبوعياً</li>
              <li className='col-12 col-md-4 py-2'><BiTime className='align-self-center'/> مدة كل لقاء ساعة ونصف</li>
              <li className='col-12 col-md-4 py-2'><BsListCheck className='align-self-center'/> يتضمن حصتين تدريبيتين</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Schedule