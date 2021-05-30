import React, {useState} from 'react';
import Input from '../commons/Input/Input'
import './auth.css'
import {login} from "../../store/User/action";
import {useDispatch} from "react-redux";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    return (
        <div className="container">
            <div className="image" />
            <div className="input-form">
                <h3>Вхід в аккаунт</h3>
                <div className="inputs">
                    <label>
                        Email
                        <Input
                            type={'email'}
                            placeholder={'mail@example.com'}
                            value={email}
                            setValue={setEmail}
                        />
                    </label>

                    <label>
                        Пароль
                        <Input
                            type={'password'}
                            placeholder={'Пароль'}
                            value={password}
                            setValue={setPassword}
                        />
                    </label>
                </div>
                <div className="buttons">
                    <button onClick={() => {dispatch(login(email, password))}}> Увійти </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
