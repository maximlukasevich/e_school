import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'

const Login = () => {
    return (
        <div>
        <Card style={{ width: '22rem', margin: '50px auto'}}>
            <Card.Body>
                <Card.Title>Вхід</Card.Title>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Введіть email" />
                        <Form.Text className="text-muted">
                            Введіть email за допомогою якого ви реєструвалися на сайті.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Увійти
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Login
