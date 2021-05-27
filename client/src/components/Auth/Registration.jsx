import React from 'react';
import Input from '../commons/Input/Input'
import Button from "../commons/Button/Button";
import './auth.css'

const Registration = () => {
    return (
        <div className="container">
            <div className="image" />
            <div className="input-form">
                <h3>Реєстрація</h3>
                <div className="inputs">
                    <label>
                        Email
                        <Input type='email' placeholder='Email'/>
                    </label>

                    <label>
                        Пароль
                        <Input type='password' placeholder='Пароль'/>
                    </label>
                    <label>
                        Повторіть пароль
                        <Input type='password' placeholder='Повторіть пароль'/>
                    </label>
                    <label>
                        Ім'я
                        <Input type='password' placeholder="Ім'я"/>
                    </label>
                    <label>
                        Фамілія
                        <Input type='password' placeholder='Фамілія'/>
                    </label>
                    <label>
                        По батькові
                        <Input type='password' placeholder='По батькові'/>
                    </label>
                </div>
                <div className="buttons">
                    <Button value='Зареєструватися'/>
                </div>
            </div>
        </div>
    );
};

export default Registration;
