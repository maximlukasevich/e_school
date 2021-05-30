import React, {useState} from 'react';
import {registration} from "../../store/User/action";
import {useDispatch} from "react-redux";

import Input from '../commons/Input/Input'
import './auth.css'


const Registration = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [role, setRole] = useState('Учень')

    const roleHandler = (e) => {
        setRole(e.target.value)
    }

    const dispatch = useDispatch()

    return (
        <div className="container">
            <div className="image" />
            <div className="input-form">
                <h3>Реєстрація</h3>
                <div className="inputs">
                    <label>
                        Email
                        <Input
                            type={'email'}
                            placeholder={'Email'}
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
                    <label>
                        Повторіть пароль
                        <Input
                            type={'password'}
                            placeholder={'Повторіть пароль'}
                            value={repeatPassword}
                            setValue={setRepeatPassword}
                        />
                    </label>
                    <label>
                        Ім'я
                        <Input
                            type={'text'}
                            placeholder={'Ім\'я'}
                            value={firstName}
                            setValue={setFirstName}
                        />
                    </label>
                    <label>
                        Фамілія
                        <Input
                            type={'text'}
                            placeholder={'Фамілія'}
                            value={lastName}
                            setValue={setLastName}
                        />
                    </label>
                    <label>
                        По батькові
                        <Input
                            type={'text'}
                            placeholder={'По батькові'}
                            value={middleName}
                            setValue={setMiddleName}
                        />
                    </label>

                    <label>
                        Статус
                        <select onChange={(e) => {roleHandler(e)}}>
                            <option value="Учень">Учень</option>
                            <option value="Батько">Батько</option>
                            <option value="Вчитель">Вчитель</option>
                        </select>
                    </label>

                </div>
                <div className="buttons">
                    <button onClick={() => {dispatch(registration(
                        firstName,
                        lastName,
                        middleName,
                        email,
                        password,
                        role
                    ))}}> Зареєструватися </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
