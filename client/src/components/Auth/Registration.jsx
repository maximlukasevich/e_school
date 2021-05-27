import React from 'react';
import Input from '../commons/Input/Input'
import Button from "../commons/Button/Button";
import './auth.css'

const Registration = () => {
    return (
        <div className="container">
            <div className="image" />
            <div className="input-form">
                <h3>Вхід в аккаунт</h3>
                <div className="inputs">
                    <label>
                        Email
                        <Input type='email' placeholder='Email'/>
                    </label>

                    <label>
                        Пароль
                        <Input type='password' placeholder='Пароль'/>
                    </label>
                </div>
                <div className="buttons">
                    <Button value='Увійти'/>
                </div>
            </div>


        </div>
    );
};

export default Registration;
