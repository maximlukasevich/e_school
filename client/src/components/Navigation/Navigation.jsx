import React from 'react';
import './nav.css'

const Navigation = (props) => {
    return (
        <div>
            <nav>
                <div className="container">
                    <h1>E-School</h1>
                    <ul>
                    {props.auth && <>
                        <li><a>{props.user}</a></li>
                        <li><a>Налаштування</a></li>
                        <li><a>Вихід</a></li>
                    </>}
                    {!props.auth && <>
                        <li><a href="">Увійти</a></li>
                        <li><a href="">Зареєструватися</a></li>
                    </>}
                    </ul>
                </div>
            </nav>
            <div className="empty-div" />
        </div>
    );
};

export default Navigation;
