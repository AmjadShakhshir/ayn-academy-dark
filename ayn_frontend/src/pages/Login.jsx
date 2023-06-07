import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
  return (
    <FormContainer>
        <h1>تسجيل دخول</h1>

        <Form onSubmit={ submitHandler }>
            <Form.Group className='my-2' controlId='email'>
                <FormLabel>الايميل الشخصي</FormLabel>
                <Form.Control
                type='email'
                placeholder='أدخل الايميل الشخصي'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='password'>
                <FormLabel>كلمة السر</FormLabel>
                <Form.Control
                type='password'
                placeholder='أدخل كلمة السر'
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>
            
            { isLoading && <Loader />}
            <Button type='submit' variant='primary' className='mt-3'>
                تسجيل دخول
            </Button>

            <Row className='py-3'>
                <Col>
                    مستخدم جديد ؟ <Link to='/register'>تسجيل</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default Login