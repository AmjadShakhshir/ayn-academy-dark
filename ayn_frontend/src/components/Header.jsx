import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import images from '../constants/images';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
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
                { userInfo ? (
                  <>
                  <NavDropdown title={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item>
                          الملف الشخصي <FaSignInAlt />
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/logout'>
                        <NavDropdown.Item onClick={ logoutHandler }>
                          تسجيل الخروج  <FaSignOutAlt />
                        </NavDropdown.Item>
                      </LinkContainer>
                  </NavDropdown>
                  </>
                ):
                (
                  <>
                    <LinkContainer to='/login'>
                      <NavDropdown.Item
                      className='p-2 text-white border border-4 rounded bg-danger mx-2'>
                        تسجيل الدخول  <FaSignInAlt /> 
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/register'>
                      <NavDropdown.Item
                      className='text-white p-2 border border-4 rounded'>
                        تسجيل  <FaSignInAlt />
                      </NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      </header>
    </>
  );
};

export default Header;