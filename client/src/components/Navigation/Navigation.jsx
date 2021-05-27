import React from 'react';
import './nav.css'
import {NavLink} from 'react-router-dom'

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
                        <NavLink to='/login' activeClassName='selected'><li>Увійти</li></NavLink>
                        <NavLink to='/registration' activeClassName='selected'><li>Зареєструватися</li></NavLink>
                    </>}
                    </ul>
                </div>
            </nav>
            <div className="empty-div" />
        </div>
    );
};

export default Navigation;
