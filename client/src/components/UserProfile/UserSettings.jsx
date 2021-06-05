import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {Button, Card, CardColumns, Col, Form} from "react-bootstrap";
import {setStudentClass, update} from "../../store/CurrentUser/action";
import {getClassesThunk} from "../../store/Class/action";

const UserSettings = ({user, classes}) => {

    console.log(classes)

    let userClassId = null
    if (user.userClass) {
        userClassId = user.userClass._id
    }

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [middleName, setMiddleName] = useState(user.middleName)
    const [phone, setPhone] = useState(user.phone)
    const [gender, setGender] = useState(user.gender)
    const [city, setCity] = useState(user.city)
    const [street, setStreet] = useState(user.street)
    const [apartments, setApartments] = useState(user.apartments)
    const [zipCode, setZipCode] = useState(user.zipCode)
    const [userClass, setUserClass] = useState(userClassId)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClassesThunk())
    }, [])

    const saveSettingsHandler = (e) => {
        dispatch(update(
            firstName, lastName, middleName,
            phone, gender, city,
            street, apartments, zipCode,
            user._id
        ))
    }

    const saveClassHandler = (e) => {
        dispatch(setStudentClass(userClass, user._id))
    }

    return (
        <div className="container">

            <div className="mt-3" style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Налаштування</h3>
                <Button
                    variant="primary"
                    onClick={e => saveSettingsHandler()}>
                    Зберегти налаштування
                </Button>
            </div>

            <Card className="mt-3">
                <Card.Header as="h5">Основна інформація</Card.Header>
                <Card.Body>
                    <Form className={"mt-3"}>
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
                                <Form.Label>Стать</Form.Label>
                                <Form.Control
                                    onChange={e => setGender(e.target.value)}
                                    as="select"
                                    defaultValue={gender || null} >
                                    <option selected disabled value={null}>Оберіть стать</option>
                                    <option value='Чоловіча'>Чоловіча</option>
                                    <option value='Жіноча'>Жіноча</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>


            <CardColumns>

                <Card className={"mt-3"}>
                    <Card.Header as="h5">Адреса</Card.Header>
                    <Card.Body>
                        <Form className={"mt-3"}>
                            <Form.Group controlId="">
                                <Form.Label>Місто</Form.Label>
                                <Form.Control
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                    type="text"
                                    placeholder="Місто" />
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Вулиця</Form.Label>
                                <Form.Control
                                    value={street}
                                    onChange={e => setStreet(e.target.value)}
                                    type="text"
                                    placeholder="Вулиця" />
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Дім/Квартира</Form.Label>
                                <Form.Control
                                    value={apartments}
                                    onChange={e => setApartments(e.target.value)}
                                    type="text"
                                    placeholder="Дім/Квартира" />
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Почтовий індекс</Form.Label>
                                <Form.Control
                                    value={zipCode}
                                    onChange={e => setZipCode(e.target.value)}
                                    type="text"
                                    placeholder="Почтовий індекс" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>

                <Card className={"mt-3"}>
                    <Card.Header as="h5">Контактна інформація</Card.Header>
                    <Card.Body>
                        <Form className={"mt-3"}>
                            <Form.Group controlId="">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="Телефон" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>

                {user.role === 'Учень' && <>
                    <Card className={"mt-3"}>
                        <Card.Header as="h5">Налаштування учня</Card.Header>
                        <Card.Body>
                            <Form className={"mt-3"}>
                                <Form.Group controlId="">
                                    <Form.Label>Клас</Form.Label>
                                    <Form.Control
                                        onChange={e => setUserClass(e.target.value)}
                                        as="select"
                                        defaultValue={userClass || null} >
                                        <option selected disabled value={null}>Оберіть свій клас</option>
                                        {classes.map((item) => <option value={item._id}>{item.name}</option>)}
                                    </Form.Control>
                                </Form.Group>
                                <Button
                                    onClick={e => saveClassHandler(e)}
                                    variant="primary">
                                    Зберегти клас
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </>}

                {user.role === 'Батько' && <>
                    <Card className={"mt-3"}>
                        <Card.Header as="h5">Налаштування батька</Card.Header>
                        <Card.Body>
                            <Form className={"mt-3"}>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        type="text"
                                        placeholder="Телефон" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </>}

                {user.role === 'Вчитель' && <>
                    <Card className={"mt-3"}>
                        <Card.Header as="h5">Налаштування вчителя</Card.Header>
                        <Card.Body>
                            <Form className={"mt-3"}>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        type="text"
                                        placeholder="Телефон" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </>}

                {user.role === 'Адмін' && <>
                    <Card className={"mt-3"}>
                        <Card.Header as="h5">Налаштування адміна</Card.Header>
                        <Card.Body>
                            <Form className={"mt-3"}>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        type="text"
                                        placeholder="Телефон" />
                                </Form.Group>

                            </Form>
                        </Card.Body>
                    </Card>
                </>}
            </CardColumns>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        classes: state.classes.classes
    }
}

export default connect(mapStateToProps)(UserSettings);
