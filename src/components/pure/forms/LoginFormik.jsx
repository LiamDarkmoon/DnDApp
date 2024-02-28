import React from 'react';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { login } from '../../../services/axios-crud-service';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid Email, please try again')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')

    }
);


const LoginFormik = () => {

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                alert('Ups i did it again' + error)
                sessionStorage.removeItem('token')
            })
            .finally(() => {
                alert('You are being redirected to home')
            })
    }
    
    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    authUser(values)
                }}
                >

                {({ isSubmitting }) => (
                    <Form className='border rounded border-danger m-3 p-4'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <Field className='form-control' id='email' type='email' name='email' placeholder='Camilolopez@gmail.com'/>

                        <ErrorMessage className='text-danger' component='div' name='email'/>


                        <label className='form-label' htmlFor='password'>Password</label>
                        <Field className='form-control' id='password' type='password' name='password' placeholder='Password'/>

                        <ErrorMessage className='text-danger' component='div' name='password'/>

                        <button className='btn btn-danger my-2' type='submit'>Login</button>
                        {isSubmitting ? (<p>Login... please wait</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
