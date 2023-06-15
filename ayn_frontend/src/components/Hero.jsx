import { Container } from "react-bootstrap"
import images from "../constants/images"
import { LinkContainer } from "react-router-bootstrap"

const Hero = () => {
  return (
    <main className="py-5 text-light text-center text-sm-start gradient-bg">
        <Container className="d-flex">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-start">
                    <h1 className="display-1">منصة عين</h1>
                    <p className="lead">تدريبية . تربوية . تعليمية</p>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="أدخل بريدك الشخصي"
                        aria-label="أدخل بريدك الشخصي" aria-describedby="button-addon2" />
                        <LinkContainer to='/register'>
                            <button
                            className="btn btn-orange rounded-left p-2 text-light fs-5 fw-bold"
                            type="button"
                            id="button-addon2">ابدأ الآن</button>
                        </LinkContainer>
                    </div>
                    <div className="d-flex flex-column align-items-center flex-lg-row p-2">
                        <img
                        src={images.people}
                        alt="avatar pics with number of registered users"
                        className="img-fluid w-50"/>
                        <p className="lead px-2 fs-6">١٦٠٠ شخص قاموا بطلب الإشتراك في برامجنا في آخر ٢٤ ساعة.</p>
                    </div>
                </div>
                <img src={images.intro} alt="logo" className="img-fluid w-50 d-none d-sm-block" />
            </div>
        </Container>
    </main>
  )
}

export default Hero