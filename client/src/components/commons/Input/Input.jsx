import React from 'react';
import './input.css'

const Input = (props) => {
    return <input type={props.type} placeholder={props.placeholder} value={props.value}/>
};

export default Input;
