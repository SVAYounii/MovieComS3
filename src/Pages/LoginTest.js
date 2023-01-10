import React from 'react'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";


export function LoginTest() {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }
    return (
        <Col xs lg="5" className='mx-auto'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
                <Form className='w-100 mx-5'>
                    <h1 style={{ textAlign: 'center' }} className="font-weight-bold mb-5"> Login </h1>
                    <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                        <Form.Label className='mb-0'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                        <Form.Label className='mb-0'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className='mb-3 mx-5 '>
                        <p className='mb-0 h6'>Select Role</p>
                        <Form.Select >
                            <option >Select Role</option>
                            <option value="1">Listener</option>
                            <option value="2">Creator</option>
                        </Form.Select>
                    </div>

                    <div className="d-grid gap-2 mt-4">
                        <Button onClick={routeChange} variant="primary" className='mx-5' type="submit">
                            Login
                        </Button>
                        <a href='/RegisterTest' className='mx-5 text-center mt-5 link-secondary' style={{ color: "grey" }}>Create Your Account </a>
                    </div>

                </Form>
            </div>
        </Col>

    );
}



export default LoginTest;