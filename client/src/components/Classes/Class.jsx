import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {connect, useDispatch, useSelector} from "react-redux";
import {Card, Container, ListGroup, Tab, Tabs} from "react-bootstrap";
import {getClassesThunk} from "../../store/Class/action";
import {getClassByClassName} from "../../store/Class/selectors";
import classBg from '../../assets/images/class/class-bg.jpg'
import {NavLink} from "react-router-dom";
import {getClassStudents} from "../../store/Users/action";
import {getLessonsByClass} from "../../store/Lessons/action";

const Class = ({students, lessons}) => {

    const {className} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClassesThunk())
        dispatch(getClassStudents(className))
        dispatch(getLessonsByClass(className))
    }, [])


    const userClass = useSelector(state => getClassByClassName(state, className))

    return (
        <Container>
            {userClass && <>
                <Card className={"border-top-0 mt-3"} style={{borderRadius: '0 0 4px 4px'}}>
                    <Card.Img src={classBg} alt="Class image" />
                    <Card.ImgOverlay>

                        <Card.Body>
                            <Card.Title className={"text-light display-4 font-weight-bold"}>Клас: {userClass.name}</Card.Title>
                            <Card.Subtitle className={"text-light font-weight-bold"} style={{fontSize: '22px'}}>
                                Класний керівник: {userClass.teacher.lastName} {userClass.teacher.firstName} {userClass.teacher.middleName}
                            </Card.Subtitle>

                            <Tabs
                                variant={"pills"}
                                defaultActiveKey="lessons"
                                id="uncontrolled-tab-example"
                                className="mb-3 mt-3 bg-dark"
                                style={{borderRadius: '4px'}}
                            >

                                <Tab tabClassName={"text-light font-weight-bolder"} eventKey="news" title="Новини" disabled>
                                </Tab>

                                <Tab tabClassName={"text-light font-weight-bolder"} eventKey="lessons" title="Уроки">
                                    <ListGroup>
                                            <ListGroup.Item active disabled>
                                                Список уроків
                                            </ListGroup.Item>
                                        {lessons.map(item =>
                                            <ListGroup.Item>
                                                Урок: <b>{item.name}</b> - <NavLink to={`/lessons/${item.slug}`}> переглянути</NavLink> <br/>
                                                Вчитель: {item.teacher.lastName} {item.teacher.firstName} {item.teacher.middleName} -
                                                <NavLink to={`/users/${item.teacher._id}`}> профіль</NavLink>
                                            </ListGroup.Item>
                                        )}
                                    </ListGroup>
                                </Tab>
                                <Tab tabClassName={"text-light font-weight-bolder"} eventKey="students" title="Учні" >
                                    <ListGroup>
                                        <ListGroup.Item active disabled>
                                            Список учнів
                                        </ListGroup.Item>
                                        {students.map(item =>
                                            <ListGroup.Item>
                                                {item.lastName} {item.firstName} {item.middleName} -
                                                <NavLink to={`/users/${item._id}`}> переглянути профіль</NavLink>
                                            </ListGroup.Item>
                                        )}
                                    </ListGroup>

                                </Tab>

                                <Tab tabClassName={"text-light font-weight-bolder"} eventKey="more" title="Розклад">
                                    <NavLink to={'/schudle'}>
                                        Groove street, home........
                                    </NavLink>
                                </Tab>
                            </Tabs>

                        </Card.Body>

                    </Card.ImgOverlay>
                </Card>
            </>}
            {!userClass && <>
                <h3>Такого класу не існує</h3>
            </>}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        students: state.users.users,
        lessons: state.lessons.lessons
    }
}

export default connect(mapStateToProps)(Class);
