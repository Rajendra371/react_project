import React from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <Formik
    initialValues={{firstname:'',lastname:'', email:'',password:'', cpassword:''}}
        validationSchema={Yup.object({
            firstname:Yup.string()
            .max(20, 'must be 20 character')
            .required('firstname is mandatory'),

            lastname:Yup.string()
            .max(20, 'must be 20 character')
            .required('lastname is mandatory'),

            email:Yup.string()
            .email('invalid email format')
            .required('email is mandat0ry'),


            password:Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!&-_?])[A-Za-z\d@#$!&-_?]{8,50}$/,'weak password, it must be atlest 8 characters one each uppercase ,lowercase,numeric and special character')
            .required('password is mandatory'),
             
            cpassword:Yup.string()
            .required('Comform password is mondatory')
            .oneOf([Yup.ref('password'),null], 'password and conform password must be match')



        })}
    >
        
        
        <div className="container my-5">
            <div className="row d-felx justify-content-center">
                <div className="col-md-5 shadow p-3">
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="firstname">Firstname</label>
                            <Field type='text' id='firstname' name='firstname' className='form-control'/>
                            <ErrorMessage name ='firstname'>
                            {msg =><div style={{color:'red'}}>{msg} </div>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="lastname">Lastname</label>
                            <Field type='text' id='lastname' name='lastname' className='form-control'/>
                            <ErrorMessage name ='lastname'>
                            {msg =><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type='email' id='email' name='email' className='form-control'/>
                            <ErrorMessage name ='email'>
                            {msg =><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type='password' id='password' name='password' className='form-control'/>
                            <ErrorMessage name ='password'>
                            {msg =><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        
                        <div className="mb-2">
                            <label htmlFor="cpassword">Comform Password</label>
                            <Field type='password' id='cpassword' name='cpassword' className='form-control'/>
                            <ErrorMessage name ='cpassword'>
                            {msg =><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="md-2">
                            <button className='btn btn-primary'>Register</button>
                        </div>

                        
                        

                    </Form>
                </div>
            </div>
        </div>
    </Formik>
  )
}

export default Register