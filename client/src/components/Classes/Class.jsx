import React from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";

const Class = () => {

    const {className} = useParams()


    return (
        <div className="container">
            {className}
            class
        </div>
    );
};

export default Class;
