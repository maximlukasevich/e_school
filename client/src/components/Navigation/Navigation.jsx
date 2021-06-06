import React from 'react';
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/CurrentUser/reducer";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Navigation = (props) => {

    const user = useSelector((state) => state.user.user)
    const isAuth = useSelector((state) => state.user.isAuth)
    let userClass

    if (user && user.role === 'Учень' && user.userClass) {
        userClass = user.userClass.name
    }

    const dispatch = useDispatch()

    const logOutHandler = (e) => {
        dispatch(logOut())
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand>E-School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {isAuth && <>
                                {user.role === 'Учень' && <>
                                    <NavLink className="nav-link" to='/lessons'>Уроки</NavLink>
                                    <NavLink className="nav-link" to='/schedule'>Розклад</NavLink>
                                    <NavLink className="nav-link" to='/homework'>Домашнє завдання</NavLink>
                                    <NavLink className="nav-link" to='/grades'>Оцінки</NavLink>
                                    <NavLink className="nav-link" to={`/classes/${userClass}`}>Мій клас</NavLink>
                                </>}
                                {user.role === 'Вчитель' && <>
                                    <NavLink className="nav-link" to='/lessons'>Уроки</NavLink>
                                    <NavLink className="nav-link" to='/schedule'>Розклад</NavLink>
                                    <NavLink className="nav-link" to='/classes'>Класи</NavLink>
                                </>}
                                {user.role === 'Батько' && <>
                                    <NavLink className="nav-link" to='/schedule'>Розклад</NavLink>
                                    <NavLink className="nav-link" to='/homework'>Домашнє завдання</NavLink>
                                    <NavLink className="nav-link" to='/grades'>Успішність дитини</NavLink>
                                </>}
                                {user.role === 'Адмін' && <>
                                    <NavLink className="nav-link" to='/lessons'>Уроки</NavLink>
                                    <NavLink className="nav-link" to='/classes'>Класи</NavLink>
                                    <NavLink className="nav-link" to='/users'>Користувачі</NavLink>
                                    <NavLink className="nav-link" to='/schedule'>Розклад</NavLink>
                                    <NavLink className="nav-link" to='/reports'>Звіти</NavLink>
                                </>}
                            </>}
                        </Nav>
                        <Nav>
                            {!isAuth && <>
                                <NavLink className="nav-link" to='/login'>Вхід</NavLink>
                                <NavLink className="nav-link" to='/registration'>Реєстрація</NavLink>
                            </>}
                            {isAuth && <>
                                <NavDropdown title={user.firstName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink
                                            to={`/users/${user._id}`}>
                                            Профіль
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink
                                            to={`/users/${user._id}/settings`}>
                                            Налаштування
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink to={'/'}>
                                            Повідомлення
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={e => logOutHandler(e)}>Вийти</NavDropdown.Item>
                                </NavDropdown>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;
