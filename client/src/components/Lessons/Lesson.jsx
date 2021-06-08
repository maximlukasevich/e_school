import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {Card, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getLessons} from "../../store/Lessons/action";
import {getLessonBySlug} from "../../store/Lessons/selectors";
import {NavLink} from "react-router-dom";

const Lesson = () => {

    const {lessonSlug} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLessons())
    }, [])

    const lesson = useSelector(state => getLessonBySlug(state, lessonSlug))

    return (
        <Container>
            <Card className={'mt-3'}>
                <Card.Header as="h5">Дані про урок</Card.Header>
                <Card.Body>
                    <Card.Title>Назва: {lesson.name}</Card.Title>
                    <Card.Subtitle>Вчитель: {lesson.teacher.lastName} {lesson.teacher.firstName} {lesson.teacher.middleName}</Card.Subtitle>
                    <Card.Text>
                        Призначений для класу:
                        <NavLink to={`/classes/${lesson.class.name}`}> {lesson.class.name}</NavLink>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Lesson;
