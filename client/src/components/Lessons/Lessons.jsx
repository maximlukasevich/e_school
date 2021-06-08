import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {getLessons} from "../../store/Lessons/action";
import {Button, Container, Tab, Table, Tabs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Lessons = ({user, lessons}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLessons())
    }, [])

    return (
        <Container>

            {(user.role === 'Вчитель' || user.role === 'Адмін') && <>
            <NavLink to={'/lessons/create'}>
                <Button className={"mt-3"}>
                        Створити урок
                </Button>
            </NavLink>
            </> }

            <Tabs
                variant={"pills"}
                defaultActiveKey="allLessons"
                id="uncontrolled-tab-example"
                className="mb-3 mt-3 bg-dark"
                style={{borderRadius: '4px'}}
            >
                <Tab tabClassName={"text-light"} eventKey="allLessons" title="Всі уроки">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Назва</th>
                            <th>Вчитель</th>
                            <th>Клас</th>
                        </tr>
                        </thead>
                        <tbody>
                        {lessons.map(item => <>
                            <tr>
                                <td>
                                    <NavLink to={`/lessons/${item.slug}`}>
                                            {item.name}
                                    </NavLink>
                                </td>

                                <td>
                                    <NavLink to={`/users/${item.teacher._id}`}>
                                    {item.teacher.lastName} {item.teacher.firstName} {item.teacher.middleName}
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/classes/${item.class.name}`}>
                                        {item.class.name}
                                    </NavLink>
                                </td>
                            </tr>
                        </>)}
                        </tbody>
                    </Table>
                </Tab>
                <Tab tabClassName={"text-light"} eventKey="myLessons" title="Мої уроки" disabled>

                    <p className="h3">Ваш статус: {user.role}</p>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Назва</th>
                            <th>Вчитель</th>
                            <th>Клас</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user.role === 'Учень' }
                        {lessons.map(item => <>
                            <tr>
                                <td>
                                    <NavLink to={`/lessons/${item.slug}`}>
                                        {item.name}
                                    </NavLink>
                                </td>

                                <td>
                                    <NavLink to={`/users/${item.teacher._id}`}>
                                        {item.teacher.lastName} {item.teacher.firstName} {item.teacher.middleName}
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/classes/${item.class.name}`}>
                                        {item.class.name}
                                    </NavLink>
                                </td>
                            </tr>
                        </>)}
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        lessons: state.lessons.lessons,
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Lessons);
