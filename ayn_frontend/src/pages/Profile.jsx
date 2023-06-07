import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../slices/authSlice';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { Form, Button, FormLabel } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';

const Profile = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword]= useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateUser, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        setName(userInfo.name)
        setEmail(userInfo.email)
    }, [userInfo.name, userInfo.email]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('كلمة السر غير متطابقة');
        } else if (password !== '' && password.length < 6) {
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
                const res = await updateUser({
                id: userInfo.id,
                name,
                email,
                password }).unwrap();
                dispatch(setCredentials({...res}));
                toast.success('تم تحديث الملف الشخصي بنجاح');
                navigate('/profile');
            } catch (err) {
                toast.error(err?.data?.message || 'حدث خطأ أثناء تحديث الملف الشخصي');
            }  
        }
    }
  return (
    <FormContainer>
        <h1>تحديث الملف الشخصي</h1>

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

            { isLoading && <Loader /> }

            <Button type='submit' variant='primary' className='mt-3'>
                تحديث 
            </Button>

        </Form>
    </FormContainer>
  )
}

export default Profile