import React from 'react';
import {useFormik} from 'formik';
import { basicSchema } from '../schemas';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row';

import Gmail from '../../images/google.png'
import Facebook from '../../images/facebook.png'

function Signup() {
    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      };

      const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
          email: "",
          firstname:"",
          lastname:"",
          dateOfBirth: "",
          password: "",
          confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
      });
    
      console.log(errors);

  return (
    <Container fluid='md'>
        <Row className='justify-content-center align-items-center'>
            <Col md={6} lg={4} className='shadow p-3 mb-5 bg-body rounded mt-md-5 bg-white'>
               <Form className='p-3' onSubmit={handleSubmit} autoComplete="off">
                <p className='fs-3 text-center'> Create a new account</p>
                <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control  
                            value={values.email}
                            onChange={handleChange}
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "input-error" : ""} 
                            />
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingFirstname" label="Firstname" className='mb-3'>
                        <Form.Control 
                            value={values.firstname}
                            onChange={handleChange}
                            id="firstname"
                            type="text"
                            placeholder="Enter your Fistname"
                            onBlur={handleBlur}
                            className={errors.firstname && touched.firstname ? "input-error" : ""} 
                             />
                        {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingLastname" label="Lastname" className='mb-3'>
                        <Form.Control 
                            value={values.lastname}
                            onChange={handleChange}
                            id="lastname"
                            type="text"
                            placeholder="Enter your lastname"
                            onBlur={handleBlur}
                            className={errors.lastname && touched.lastname ? "input-error" : ""}  />
                        {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingBirth" label="Date of Bith" className='mb-3'>
                        <Form.Control 
                            value={values.dateOfBirth}
                            onChange={handleChange}
                            id="dateOfBirth"
                            type="date"
                            placeholder="Date of birth"
                            onBlur={handleBlur}
                            className={errors.dateOfBirth && touched.dateOfBirth ? "input-error" : ""}  
                             />
                        {errors.dateOfBirth && touched.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPasswod" label="Password" className='mb-3'>
                        <Form.Control 
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            type="password"
                            placeholder="Date of birth"
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "input-error" : ""}  
                             />
                        {errors.password && touched.password && <p className="error">{errors.password}</p>}
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingConfirmPassword" label="ConfirmPassword" className='mb-3'>
                        <Form.Control 
                            value={values.confirmPassword}
                            onChange={handleChange}
                            id="confirmPassword"
                            type="password"
                            placeholder="Date of birth"
                            onBlur={handleBlur}
                            className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}  
                              />
                        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </FloatingLabel>
                    <Button variant='primary' type='submit'> Create</Button>
                </Form> 
                <p className='fs-6 text-center' > OR </p>
                <ListGroup  className='px-3' >
                    <ListGroup.Item className='text-center'>
                        <img src={Gmail} alt="dj" className='img-fluid me-2' />
                         Continue with Gmail
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='p-3'>
                    <ListGroup.Item className='text-center'> 
                    <img src={Facebook} alt="dj" className='img-fluid me-2' />
                        Continue with Facebook
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
  )
}

export default Signup
