import React, {useState} from 'react';
import {registration} from "../../store/CurrentUser/action";
import {useDispatch} from "react-redux";
import {Button, Card, Col, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Registration = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [role, setRole] = useState('Учень')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        dispatch(registration(firstName, lastName, middleName, email, password, role))
    }

    return (
        <div className="container">
            <Card className="my-3 mx-auto" style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title>Реєстрація</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Заповніть поля та натисніть кнопку "Зареєструватися"
                    </Card.Subtitle>
                    <hr/>
                    <Form>
                        <Form.Group controlId="">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Пароль" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Повторіть пароль</Form.Label>
                            <Form.Control
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)}
                                type="password"
                                placeholder="Повторіть пароль" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="">
                                <Form.Label>Ім'я</Form.Label>
                                <Form.Control
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    type="text"
                                    placeholder="Ім'я" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="">
                                <Form.Label>Фамілія</Form.Label>
                                <Form.Control
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    type="text"
                                    placeholder="Фамілія" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="">
                                <Form.Label>По батькові</Form.Label>
                                <Form.Control
                                    value={middleName}
                                    onChange={e => setMiddleName(e.target.value)}
                                    type="text"
                                    placeholder="По батькові" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="">
                                <Form.Label>Тип користувача</Form.Label>
                                <Form.Control
                                    onChange={e => setRole(e.target.value)}
                                    as="select"
                                    defaultValue={role || null} >
                                    <option selected disabled value={null}>Оберіть тип користувача</option>
                                    <option value='Учень'>Учень</option>
                                    <option value='Батько'>Батько</option>
                                    <option value='Вчитель'>Вчитель</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>


                        <Button onClick={e => submitHandler(e)}>Зареєструватися</Button>
                    </Form>
                </Card.Body>
                <Card.Footer><NavLink to={'/login'}>Увійти в існуючий аккаунт</NavLink></Card.Footer>
            </Card>
        </div>
    );
};

export default Registration;
