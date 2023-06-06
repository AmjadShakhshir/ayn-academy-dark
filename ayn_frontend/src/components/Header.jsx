import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import images from '../constants/images';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <header className="gradient-bg">
        <Navbar expand='lg' className='py-4 navbar-dark' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img
                    alt='logo'
                    src={images.logo}
                    width='110'
                    height='40'
                    className='d-inline-block align-top'
                />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto px-5'>
                <LinkContainer to='/'>
                  <Nav.Link>الرئيسية</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link>من نحن؟</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/features'>
                  <Nav.Link>المميزات</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/opportunities'>
                  <Nav.Link>الفرص</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/courses'>
                  <Nav.Link>الدروس</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <Nav.Link>عن الدورة</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className='me-auto'>
                <LinkContainer to='/login'>
                  <Nav.Link>
                      <FaSignInAlt /> تسجيل الدخول
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                      <FaSignOutAlt /> تسجيل
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      </header>
    </>
  );
};

export default Header;