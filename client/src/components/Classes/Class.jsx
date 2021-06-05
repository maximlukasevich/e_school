import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {connect, useDispatch} from "react-redux";
import {Container} from "react-bootstrap";
import {getClassesThunk} from "../../store/Class/action";
import {getClassByClassName} from "../../store/Class/selectors";

const Class = ({classes, getClassByClassName}) => {

    const {className} = useParams()
    console.log(getClassByClassName)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClassesThunk())
    }, [])

    return (
        <Container>
            {className}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        classes: state.classes.classes
    }
}

export default connect(mapStateToProps, {getClassByClassName})(Class);
