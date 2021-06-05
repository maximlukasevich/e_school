import React from 'react';
import {connect} from 'react-redux';
import {Card, CardColumns, Tab, Tabs} from "react-bootstrap";
import cardBgImage from '../../assets/images/profile/bg.jpg'

const UserProfile = ({user}) => {

    return (
        <div className="container">
            <Card className="bg-dark text-white mt-3">
                <Card.Img src={cardBgImage} style={{ maxHeight: '200px'}} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{user.lastName} {user.firstName} {user.middleName}</Card.Title>
                    <Card.Text>
                        Статус: {user.role}
                        {(user.role === 'Учень' && user.userClass) && <> | Клас: {user.userClass.name}</>}
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>

            <Tabs
                variant={"pills"}
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3 mt-3 bg-dark"
                style={{borderRadius: '4px'}}
            >
                <Tab tabClassName={"text-light"} eventKey="home" title="Основна інформація">
                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>Адреса</Card.Title>
                                <hr/>
                                <Card.Text>
                                    Місто: {user.city || 'Не встановлено'}
                                    <br/>
                                    Вулиця: {user.street || 'Не встановлено'}
                                    <br/>
                                    Дім/Квартира: {user.apartments || 'Не встановлено'}
                                    <br/>
                                    Почтовий індекс: {user.zipCode || 'Не встановлено'}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Контакти</Card.Title>
                                <hr/>
                                <Card.Text>
                                    Телефон: {user.phone || 'Не встановлено'}
                                    <br/>
                                    Email: {user.email || 'Не встановлено'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Tab>
                <Tab eventKey="more" title="Додаткова інформація" disabled>

                </Tab>
            </Tabs>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}


export default connect(mapStateToProps)(UserProfile);
