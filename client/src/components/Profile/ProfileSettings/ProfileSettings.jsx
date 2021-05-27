import React from 'react';

import './settings.css'
import Input from "../../commons/Input/Input";
import Button from "../../commons/Button/Button";

const ProfileSettings = (props) => {
    return (
        <div className="container">
            <h2 className="settings-header">Налаштування</h2>



            <div className="settings-info">
                <div className="settings-block">
                    <h3>Основна інформація</h3>

                    <label>
                        Ім'я:
                        <Input value={''} placeholder={'Ім\'я'}/>
                    </label>
                    <label>
                        Фамілія:
                        <Input value={''} placeholder={'Фамілія'}/>
                    </label>
                    <label>
                        По батькові:
                        <Input value={''} placeholder={'По батькові'}/>
                    </label>

                    <label>
                        Стать:
                        <select>
                            <option value="Чоловіча">Чоловіча</option>
                            <option value="Жіноча">Жіноча</option>
                        </select>
                    </label>

                    <label>
                        Дата народження:
                        <Input type={'date'} placeholder={'Дата народження'}/>
                    </label>
                </div>

                <div className="settings-block">
                    <h3>Адреса</h3>
                    <label>
                        Місто:
                        <Input value={''} placeholder={'Місто'}/>
                    </label>
                    <label>
                        Вулиця:
                        <Input value={''} placeholder={'Вулиця'}/>
                    </label>
                    <label>
                        Будинок/Квартира:
                        <Input value={''} placeholder={'Будинок/Квартира'}/>
                    </label>
                    <label>
                        Почтовий індекс:
                        <Input value={''} placeholder={'Почтовий індекс'}/>
                    </label>
                </div>

                <div className="settings-block">
                    <h3>Контактна інформація</h3>
                    <label>
                        Телефон:
                        <Input value={''} placeholder={'Телефон'}/>
                    </label>
                </div>

            </div>

            <Button value="Зберегти"/>

        </div>
    );
};

export default ProfileSettings;
