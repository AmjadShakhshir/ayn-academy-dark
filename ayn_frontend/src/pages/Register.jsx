import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormLabel } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword]= useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('كلمة السر غير متطابقة');
        } else if (password === '' || confirmPassword === '' || email === '' || name === '') {
            toast.error('يرجى تعبئة جميع الحقول');
        } else if (password.length < 6) {
            toast.error('كلمة السر يجب ان تكون اكثر من 6 احرف');
        } else if (name.length < 3) {
            toast.error('الاسم يجب ان يكون اكثر من 3 احرف');
        } else if (name.length > 20) {
            toast.error('الاسم يجب ان يكون اقل من 20 حرف');
        } else if (email.length < 6) {
            toast.error('الايميل يجب ان يكون اكثر من 6 احرف');
        } else if (email.length > 50) {
            toast.error('الايميل يجب ان يكون اقل من 50 حرف');
        } else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({...res}));
                navigate('/');
            }
            catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    }
  return (
    <FormContainer>
        <h1>تسجيل</h1>

        <Form onSubmit={ submitHandler }>
            <Form.Group className='my-2' controlId='name'>
                <FormLabel>الأسم</FormLabel>
                <Form.Control
                type='name'
                placeholder='أدخل الأسم'
                value={name}
                onChange={ (e) => setName(e.target.value)}
                ></Form.Control>
            </Form.Group>

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

            <Form.Group className='my-2' controlId='confirmPassword'>
                <FormLabel>تأكيد كلمة السر</FormLabel>
                <Form.Control
                type='password'
                placeholder='تأكيد كلمة السر'
                value={confirmPassword}
                onChange={ (e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            { isLoading && <Loader />}

            <Button type='submit' variant='primary' className='mt-3'>
                تسجيل 
            </Button>

            <Row className='py-3'>
                <Col>
                    هل لديك حساب ؟ <Link to='/login'>تسجيل الدخول</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default Register