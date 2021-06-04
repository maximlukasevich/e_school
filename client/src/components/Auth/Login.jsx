import React, {useState} from 'react';
import {login} from "../../store/CurrentUser/action";
import {useDispatch} from "react-redux";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        dispatch(login(email, password))
    }

    return (
        <div className="container">
            <Card className="my-3 mx-auto" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Вхід</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Заповніть поля та натисніть кнопку "Увійти"
                    </Card.Subtitle>
                    <hr/>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Пароль" />
                        </Form.Group>
                        <Button onClick={e => submitHandler(e)}>Увійти</Button>
                    </Form>
                </Card.Body>
                <Card.Footer><NavLink to={'/registration'}>Створити аккаунт</NavLink></Card.Footer>
            </Card>
        </div>
    );
};

export default Login;
