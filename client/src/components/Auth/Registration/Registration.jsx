import React from 'react'
import {Form, Button, Col, Row, Card} from 'react-bootstrap'

const Registration = () => {
    return (
        <Card border="secondary" style={{ width: '44rem', margin: '50px auto' }}>
            <Card.Body>
                <Card.Title>Реєстрація</Card.Title>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={3}>
                            Email
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={3}>
                            Пароль
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="Пароль" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={3}>
                            Повторіть пароль
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="Повторіть пароль" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalText">
                        <Form.Label column sm={3}>
                            Ім'я
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Ім'я" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalText">
                        <Form.Label column sm={3}>
                            Фамілія
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Фамілія" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalText">
                        <Form.Label column sm={3}>
                            По батькові
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="По батькові" />
                        </Col>
                    </Form.Group>


                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={3}>
                                Статус
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="radio"
                                    label="Учень"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Батько"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Вчитель"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 12 }}>
                            <Button type="submit">Зареєструватися</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Registration
