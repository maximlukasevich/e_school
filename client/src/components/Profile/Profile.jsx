import React from 'react';
import './profile.css'

const Profile = (props) => {
    return (
        <div className="container">
            <div className="profile">
                <div className="main-info">
                    <div className="main-info-header">
                        <h2>{props.user}</h2>
                        <p>{props.role}
                            {(props.role === 'Учень') && ' | Класс ' + props.class}
                        </p>
                    </div>
                </div>

                <div className="side-info">
                    <div className="block">
                        <h3>Контакти</h3>
                        <ul>
                            <li>Email <p>{props.email}</p></li>
                            <li>Телефон <p>{props.phone}</p></li>
                        </ul>
                    </div>

                    <div className="block">
                        <h3>Адреса</h3>
                        <ul>
                            <li>Місто <br/><p>{props.city}</p></li>
                            <li>Вулиця <br/><p>{props.street}</p></li>
                            <li>Будинок <br/><p>{props.apartments}</p></li>
                            <li>Індекс <br/><p>{props.zipcode}</p></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
